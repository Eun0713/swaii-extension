import { normalizeAll, calculateSimilarity } from "@/utils/gestureNormalizer";

const storageArrayStore = ({ key, getId }) => {
  const getAll = async () => {
    const result = await chrome.storage.local.get(key);
    return result[key] ? result[key] : [];
  };

  const hasItem = async (target) => {
    const all = await getAll();
    return all.some((entry) => getId(entry) === getId(target));
  };

  const save = async (item) => {
    const isDuplicateGesture = await hasItem(item);
    if (isDuplicateGesture) {
      return false;
    }

    const all = await getAll();
    const newItem = { ...item, createdAt: new Date().toISOString() };
    const updated = [...all, newItem];
    await chrome.storage.local.set({ [key]: updated });
    return true;
  };

  const remove = async (target) => {
    const all = await getAll();
    const updated = all.filter((entry) => getId(entry) !== getId(target));
    await chrome.storage.local.set({ [key]: updated });
  };

  return { getAll, hasItem, save, remove };
};

const gestureStore = storageArrayStore({
  key: "swaii-gestures",
  getId: (gesture) => `${gesture.name}-${gesture.type}`,
});

export const findMatchingGesture = async (rawPoints) => {
  const SIMILARITY_THRESHOLD = 40;

  const convertToObjectPoints = (points) => {
    if (!Array.isArray(points)) {
      return [];
    }

    if (Array.isArray(points[0])) {
      return points.map(([x, y]) => ({ x, y }));
    }
    return points;
  };

  const userGesturePoints = convertToObjectPoints(rawPoints);
  const normalizedUserGesture = normalizeAll(userGesturePoints);

  const gestures = await gestureStore.getAll();

  let mostSimilarGesture = null;
  let bestSimilarityScore = Infinity;

  for (const gesture of gestures) {
    const storedGesturePoints = convertToObjectPoints(gesture.points);
    const normalizedStoredGesture = normalizeAll(storedGesturePoints);

    const similarity = calculateSimilarity(
      normalizedUserGesture,
      normalizedStoredGesture
    );

    if (similarity < bestSimilarityScore) {
      bestSimilarityScore = similarity;
      mostSimilarGesture = gesture;
    }
  }

  if (mostSimilarGesture && bestSimilarityScore < SIMILARITY_THRESHOLD) {
    return mostSimilarGesture;
  }
  return null;
};

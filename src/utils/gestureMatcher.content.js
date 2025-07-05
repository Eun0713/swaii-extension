import { normalizeAll, calculateSimilarity } from "@/utils/gestureNormalizer";

const storageArrayStore = ({ key, getId }) => {
  const getAll = () => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  };

  const hasItem = (target) => {
    return getAll().some((entry) => getId(entry) === getId(target));
  };

  const save = (item) => {
    if (hasItem(item)) {
      return false;
    }

    const all = getAll();
    const newItem = { ...item, createdAt: new Date().toISOString() };
    localStorage.setItem(key, JSON.stringify([...all, newItem]));
    return true;
  };

  const remove = (target) => {
    const updated = getAll().filter((entry) => getId(entry) !== getId(target));
    localStorage.setItem(key, JSON.stringify(updated));
  };

  return { getAll, save, remove, hasItem };
};

const gestureStore = storageArrayStore({
  key: "swaii-gestures",
  getId: (gesture) => `${gesture.name}-${gesture.type}`,
});

export const findMatchingGesture = (rawPoints) => {
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

  const gestures = gestureStore.getAll();

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

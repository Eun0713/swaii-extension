import type { Gesture, Point } from "@/types/gesture";
import {
  normalizeAll,
  calculateSimilarity,
} from "@/utils/gesture/gestureNormalizer";

const storageArrayStore = <T extends { name: string; type: string }>({
  key,
  getId,
}: {
  key: string;
  getId: (item: T) => string;
}) => {
  const getAll = async (): Promise<T[]> => {
    const result = await chrome.storage.local.get(key);
    return result[key] ? (result[key] as T[]) : [];
  };

  const hasItem = async (target: T): Promise<boolean> => {
    const all = await getAll();
    return all.some((entry) => getId(entry) === getId(target));
  };

  const save = async (item: T): Promise<boolean> => {
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

  const remove = async (target: T): Promise<void> => {
    const all = await getAll();
    const updated = all.filter((entry) => getId(entry) !== getId(target));
    await chrome.storage.local.set({ [key]: updated });
  };

  return { getAll, hasItem, save, remove };
};

const gestureStore = storageArrayStore<Gesture>({
  key: "swaii-gestures",
  getId: (gesture) => `${gesture.name}-${gesture.type}`,
});

const convertToObjectPoints = (
  points: Point[] | [number, number][] | undefined
): Point[] => {
  if (!points || !Array.isArray(points)) {
    return [];
  }

  if (Array.isArray(points[0])) {
    return (points as [number, number][]).map(([x, y]) => ({ x, y }));
  }
  return points as Point[];
};

export const findMatchingGesture = async (
  rawPoints: Point[] | [number, number][]
): Promise<Gesture | null> => {
  const SIMILARITY_THRESHOLD = 40;

  const userGesturePoints = convertToObjectPoints(rawPoints);
  const normalizedUserGesture = normalizeAll(userGesturePoints);

  const gestures = await gestureStore.getAll();

  let mostSimilarGesture: Gesture | null = null;
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

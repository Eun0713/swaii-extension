import {
  normalizeAll,
  calculateSimilarity,
} from "@/utils/gesture/gestureNormalizer";
import { gestureStore } from "@/utils/gesture/gestureStorage";

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

export const normalizePosition = (points) => {
  if (!points.length) {
    return [];
  }

  const startX = points[0].x;
  const startY = points[0].y;

  return points.map((point) => ({
    x: point.x - startX,
    y: point.y - startY,
  }));
};

export const normalizeScale = (points) => {
  const round = (number, decimalPlaces = 2) =>
    Math.round(number * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces);

  if (!points.length) {
    return [];
  }

  const xValues = points.map((point) => point.x);
  const yValues = points.map((point) => point.y);

  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);
  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);

  const xRange = maxX - minX;
  const yRange = maxY - minY;
  const scale = Math.max(xRange, yRange) || 1;

  return points.map((point) => ({
    x: round(((point.x - minX) / scale) * 100),
    y: round(((point.y - minY) / scale) * 100),
  }));
};

export const normalizePoints = (points, targetCount = 32) => {
  if (points.length === 0) {
    return [];
  }

  const result = [];
  const step = points.length / targetCount;

  for (let i = 0; i < targetCount; i++) {
    const index = Math.floor(i * step);
    result.push(points[Math.min(index, points.length - 1)]);
  }

  return result;
};

export const calculateSimilarity = (pointsA, pointsB) => {
  if (pointsA.length !== pointsB.length || pointsA.length === 0) {
    return Infinity;
  }

  let totalDistance = 0;

  for (let i = 0; i < pointsA.length; i++) {
    const distanceX = pointsA[i].x - pointsB[i].x;
    const distanceY = pointsA[i].y - pointsB[i].y;
    totalDistance += Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  }

  return totalDistance / pointsA.length;
};

export const normalizeAll = (points, targetCount) => {
  const resampled = normalizePoints(points, targetCount);
  const resized = normalizeScale(resampled);
  const repositioned = normalizePosition(resized);
  return repositioned;
};

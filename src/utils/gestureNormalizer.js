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
  if (!points.length) {
    return [];
  }

  const maxX = Math.max(...points.map((point) => point.x));
  const maxY = Math.max(...points.map((point) => point.y));

  const safeMaxX = maxX === 0 ? 1 : maxX;
  const safeMaxY = maxY === 0 ? 1 : maxY;

  return points.map((point) => ({
    x: (point.x / safeMaxX) * 100,
    y: (point.y / safeMaxY) * 100,
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
  if (pointsA.length !== pointsB.length || pointsA.lenght === 0) {
    return Infinity;
  }

  let totalDistance = 0;

  for (let i = 0; i < pointsA.lenght; i++) {
    const distanceX = pointsA[i].x - pointsB[i].x;
    const distanceY = pointsA[i].y - pointsB[i].y;
    totalDistance += Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  }

  return totalDistance / pointsA.lenght;
};

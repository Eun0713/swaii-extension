import {
  insertCanvas,
  clearCanvas,
  drawOnCanvas,
  fadeOutCanvas,
} from "@/utils/canvasDrawer";
import { getMatchedMapping } from "@/utils/gestureMappingResolver.content.js";
import { findMatchingGesture } from "@/utils/gestureMatcher.content";
import { runAction } from "@/utils/runAction.content";

let isDrawing = false;
let points = [];
let mouseDownTime = 0;
let hasMouseMoved = false;

export const initGestureTracking = () => {
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("contextmenu", onContextMenu);
};

const onMouseDown = (e) => {
  if (e.button !== 2) {
    return;
  }

  isDrawing = true;
  points = [[e.clientX, e.clientY]];
  mouseDownTime = Date.now();
  hasMouseMoved = false;

  insertCanvas();
  clearCanvas();
};

const onMouseMove = (e) => {
  if (!isDrawing) {
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  const [prevX, prevY] = points[points.length - 1];
  const movedX = x - prevX;
  const movedY = y - prevY;

  const movedEnough = Math.abs(movedX) > 2 || Math.abs(movedY) > 2;

  if (!hasMouseMoved && movedEnough) {
    hasMouseMoved = true;
    insertCanvas();
    clearCanvas();
  }

  if (!hasMouseMoved) {
    return;
  }

  points.push([x, y]);
  drawOnCanvas(x, y, points);
};

const onMouseUp = async () => {
  if (!isDrawing) {
    return;
  }

  isDrawing = false;

  const duration = Date.now() - mouseDownTime;
  const isGesture = hasMouseMoved || duration > 200;

  if (!isGesture) {
    return;
  }

  fadeOutCanvas();

  try {
    const matched = await findMatchingGesture(points);
    if (!matched) {
      return;
    }

    const matchedGestureMapping = await getMatchedMapping(matched.name);
    if (matchedGestureMapping) {
      runAction(matchedGestureMapping.action, matchedGestureMapping.site);
    } else {
      console.log("매칭된 제스처 없음");
    }
  } catch (error) {
    console.error("제스처 매칭 중 오류", error);
  }
};

const onContextMenu = (e) => {
  if (hasMouseMoved) {
    e.preventDefault();
  }
};

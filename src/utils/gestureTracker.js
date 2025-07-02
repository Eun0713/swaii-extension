import {
  insertCanvas,
  clearCanvas,
  drawOnCanvas,
  fadeOutCanvas,
} from "@/utils/canvasDrawer";

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

const onMouseUp = () => {
  if (!isDrawing) {
    return;
  }

  isDrawing = false;

  console.log("제스처 그리기 종료", points);

  const duration = Date.now() - mouseDownTime;
  const isGesture = hasMouseMoved || duration > 200;

  if (isGesture) {
    fadeOutCanvas();
  }
};

const onContextMenu = (e) => {
  if (hasMouseMoved) {
    e.preventDefault();
  }
};

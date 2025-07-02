import {
  insertCanvas,
  clearCanvas,
  drawOnCanvas,
  fadeOutCanvas,
} from "@/utils/canvasDrawer";

let isDrawing = false;
let points = [];

export const initGestureTracking = () => {
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("contextmenu", (e) => e.preventDefault());
};

const onMouseDown = (e) => {
  if (e.button !== 2) {
    return;
  }

  isDrawing = true;
  points = [[e.clientX, e.clientY]];

  insertCanvas();
  clearCanvas();
};

const onMouseMove = (e) => {
  if (!isDrawing) {
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  points.push([x, y]);
  drawOnCanvas(x, y, points);
};

const onMouseUp = () => {
  if (!isDrawing) {
    return;
  }

  isDrawing = false;

  console.log("제스처 그리기 종료", points);

  fadeOutCanvas();
};

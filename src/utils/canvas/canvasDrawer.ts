let canvas: HTMLCanvasElement | null;
let ctx: CanvasRenderingContext2D | null;

export const insertCanvas = (): void => {
  if (document.getElementById("gesture-canvas")) {
    return;
  }

  canvas = document.createElement("canvas");
  canvas.id = "gesture-canvas";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    pointer-events: none;
    background-color: transparent;
  `;

  document.body.appendChild(canvas);
  ctx = canvas.getContext("2d");
};

export const clearCanvas = (): void => {
  if (!ctx || !canvas) {
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const drawOnCanvas = (
  x: number,
  y: number,
  points: number[][]
): void => {
  if (!ctx) {
    return;
  }

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.shadowColor = "#6F6FB7";
  ctx.shadowBlur = 4;
  ctx.lineCap = "round";

  ctx.beginPath();
  const [prevX, prevY] = points[points.length - 2] || [x, y];
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(x, y);
  ctx.stroke();
};

export const fadeOutCanvas = (): void => {
  const canvas = document.getElementById(
    "gesture-canvas"
  ) as HTMLCanvasElement | null;

  if (!canvas) {
    return;
  }

  let opacity = 1;

  const fade = setInterval(() => {
    opacity -= 0.05;
    canvas.style.opacity = opacity.toString();

    if (opacity <= 0) {
      clearInterval(fade);
      canvas.remove();
      ctx = null;
    }
  }, 25);
};

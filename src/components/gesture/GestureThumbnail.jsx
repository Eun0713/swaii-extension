import { useEffect, useRef } from "react";

const GestureThumbnail = ({ points, width = 36, height = 36 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!points || points.length < 2) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;

    const minX = Math.min(...points.map((point) => point.x));
    const minY = Math.min(...points.map((point) => point.y));
    const maxX = Math.max(...points.map((point) => point.x));
    const maxY = Math.max(...points.map((point) => point.y));

    const gestureWidth = maxX - minX;
    const gestureHeight = maxY - minY;

    const scaleX = width / (gestureWidth || 1);
    const scaleY = height / (gestureHeight || 1);
    const scale = Math.min(scaleX, scaleY);

    const centerOffsetX = (width - gestureWidth * scale) / 2;
    const centerOffsetY = (height - gestureHeight * scale) / 2;

    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
      const x = (points[i].x - minX) * scale + centerOffsetX;
      const y = (points[i].y - minY) * scale + centerOffsetY;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }, [points, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default GestureThumbnail;

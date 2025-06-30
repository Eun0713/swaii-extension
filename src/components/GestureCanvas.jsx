import { useRef, useEffect, useState } from "react";

const GestureCanvas = ({ onPathChange, isDisabled }) => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [path, setPath] = useState([]);

  useEffect(() => {
    onPathChange(path);
  }, [path, onPathChange]);

  const getMousePos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    if (isDisabled) return;

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const pos = getMousePos(e);

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;

    ctx.shadowColor = "#6F6FB7";
    ctx.shadowBlur = 4;

    setPath([pos]);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const pos = getMousePos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    setPath((prev) => [...prev, pos]);
  };

  const endDrawing = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setPath([]);
  };

  return (
    <div className="relative flex w-full justify-center">
      <canvas
        ref={canvasRef}
        width={420}
        height={200}
        className="rounded border border-gray-600 bg-black"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
      />
      <button
        onClick={clearCanvas}
        className="absolute right-[17%] top-2 bg-black px-2 py-1 text-lg text-white"
      >
        ↺
      </button>
    </div>
  );
};

export default GestureCanvas;

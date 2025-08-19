import React, { useRef, useEffect, useState } from "react";

import { Point } from "@/types/gesture";

interface GestureCanvasProps {
  onPathChange: (path: Point[]) => void;
  isDisabled?: boolean;
}

const GestureCanvas = ({
  onPathChange,
  isDisabled = false,
}: GestureCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [path, setPath] = useState<Point[]>([]);

  useEffect(() => {
    onPathChange(path);
  }, [path, onPathChange]);

  const getContext = (): CanvasRenderingContext2D | null | undefined => {
    return canvasRef.current?.getContext("2d");
  };

  const getMousePos = (e: React.MouseEvent<HTMLCanvasElement>): Point => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDisabled) {
      return;
    }

    const ctx = getContext();
    if (!ctx) {
      return;
    }

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

  const drawPath = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) {
      return;
    }

    const ctx = getContext();
    if (!ctx) {
      return;
    }

    const pos = getMousePos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    setPath((prev) => [...prev, pos]);
  };

  const endDrawing = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = getContext();
    if (!ctx || !canvasRef.current) {
      return;
    }

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
        onMouseMove={drawPath}
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

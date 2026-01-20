"use client";

import { Plus, Minus, Undo2, Redo2 } from "lucide-react";

interface ZoomControlsProps {
  zoom: number;
  setZoom: (zoom: number) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export function ZoomControls({
  zoom,
  setZoom,
  undo,
  redo,
  canUndo,
  canRedo,
}: ZoomControlsProps) {
  const handleZoomIn = () => setZoom(Math.min(zoom + 0.1, 5));
  const handleZoomOut = () => setZoom(Math.max(zoom - 0.1, 0.1));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {/* Undo/Redo Group */}
      <div className="flex items-center gap-1 rounded-xl border border-zinc-800 bg-zinc-950/80 p-1.5 shadow-xl backdrop-blur-md">
        <button
          onClick={undo}
          disabled={!canUndo}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
            canUndo
              ? "text-zinc-200 hover:bg-zinc-900"
              : "cursor-not-allowed text-zinc-600"
          }`}
        >
          <Undo2 size={18} />
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
            canRedo
              ? "text-zinc-200 hover:bg-zinc-900"
              : "cursor-not-allowed text-zinc-600"
          }`}
        >
          <Redo2 size={18} />
        </button>
      </div>

      {/* Zoom Group */}
      <div className="flex items-center gap-1 rounded-xl border border-zinc-800 bg-zinc-950/80 p-1.5 shadow-xl backdrop-blur-md">
        <button
          onClick={handleZoomOut}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200"
        >
          <Minus size={18} />
        </button>

        <button
          onClick={handleResetZoom}
          className="flex min-w-[50px] items-center justify-center px-1 text-xs font-medium text-zinc-300 transition-colors hover:text-white"
        >
          {Math.round(zoom * 100)}%
        </button>

        <button
          onClick={handleZoomIn}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}

"use client";

import {
  MousePointer2,
  Square,
  Circle,
  Type,
  Pencil,
  Eraser,
  ArrowRight,
  Minus,
  Diamond,
  LucideIcon,
  Trash2,
} from "lucide-react";

export type Tool =
  | "select"
  | "rect"
  | "circle"
  | "diamond"
  | "arrow"
  | "line"
  | "pencil"
  | "text"
  | "eraser"
  | "clear";

interface ToolbarProps {
  selectedTool: Tool;
  setSelectedTool: (tool: Tool) => void;
}

export function Toolbar({ selectedTool, setSelectedTool }: ToolbarProps) {
  const tools: { id: Tool; icon: LucideIcon; label: string }[] = [
    { id: "select", icon: MousePointer2, label: "Selection" },
    { id: "rect", icon: Square, label: "Rectangle" },
    { id: "diamond", icon: Diamond, label: "Diamond" },
    { id: "circle", icon: Circle, label: "Circle" },
    { id: "arrow", icon: ArrowRight, label: "Arrow" },
    { id: "line", icon: Minus, label: "Line" },
    { id: "pencil", icon: Pencil, label: "Pencil" },
    { id: "text", icon: Type, label: "Text" },
    { id: "eraser", icon: Eraser, label: "Eraser" },
    { id: "clear", icon: Trash2, label: "Clear Canvas" },
  ];

  return (
    <div className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-zinc-800 bg-zinc-950/80 p-1.5 shadow-2xl backdrop-blur-md">
      {tools.map((tool) => {
        const Icon = tool.icon;
        const isActive = selectedTool === tool.id;

        return (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            title={tool.label}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />

            {/* Tooltip or label on hover could be added here */}
            {!isActive && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 scale-0 rounded bg-zinc-900 px-2 py-1 text-[10px] font-medium text-white transition-all group-hover:scale-100">
                {tool.label}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

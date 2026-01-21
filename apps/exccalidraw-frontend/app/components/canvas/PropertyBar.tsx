"use client";

import {
  Minus,
  Circle,
  Square,
  Download,
  Upload,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";

export type FillStyle = "hachure" | "solid" | "zigzag" | "cross-hatch";

interface PropertyBarProps {
  strokeColor: string;
  setStrokeColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  strokeWidth: number;
  setStrokeWidth: (width: number) => void;
  strokeStyle: "solid" | "dashed" | "dotted";
  setStrokeStyle: (style: "solid" | "dashed" | "dotted") => void;
  roughness: number;
  setRoughness: (roughness: number) => void;
  roundness: "sharp" | "round";
  setRoundness: (roundness: "sharp" | "round") => void;
  opacity: number;
  setOpacity: (opacity: number) => void;
  onBack: () => void;
  onExportPNG: () => void;
  onExportSVG: () => void;
}

export function PropertyBar({
  strokeColor,
  setStrokeColor,
  backgroundColor,
  setBackgroundColor,
  strokeWidth,
  setStrokeWidth,
  strokeStyle,
  setStrokeStyle,
  roughness,
  setRoughness,
  roundness,
  setRoundness,
  opacity,
  setOpacity,
  onBack,
  onExportPNG,
  onExportSVG,
}: PropertyBarProps) {
  const colors = [
    "#ECECEC", // White/Grey
    "#FF5555", // Red
    "#50FA7B", // Green
    "#8BE9FD", // Cyan
    "#FFB86C", // Orange
  ];

  const bgColors = ["transparent", "#FF5555", "#50FA7B", "#8BE9FD", "#FFB86C"];

  return (
    <div className="fixed top-20 left-4 z-50 flex w-64 flex-col gap-4 rounded-xl border border-zinc-800 bg-[#1e1e1e] p-4 text-zinc-300 shadow-2xl">
      {/* Actions */}
      <div className="mb-2 flex gap-2">
        <button
          onClick={onBack}
          className="flex h-8 flex-1 items-center justify-center gap-2 rounded-md bg-zinc-800 text-xs font-medium hover:bg-zinc-700"
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <button
          onClick={onExportPNG}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 hover:bg-zinc-700"
          title="Export PNG"
        >
          <Download size={14} />
        </button>
        <button
          onClick={onExportSVG}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 hover:bg-zinc-700"
          title="Export SVG"
        >
          <Upload size={14} />
        </button>
      </div>

      {/* Stroke Color */}
      <div>
        <div className="mb-2 text-xs font-medium">Stroke</div>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setStrokeColor(color)}
              className={`h-6 w-6 rounded-md border transition-transform hover:scale-110 ${
                strokeColor === color ? "border-white" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
          <div className="h-6 w-6 rounded-md bg-zinc-300" />
        </div>
      </div>

      {/* Background Color */}
      <div>
        <div className="mb-2 text-xs font-medium">Background</div>
        <div className="flex gap-2">
          {bgColors.map((color) => (
            <button
              key={color}
              onClick={() => setBackgroundColor(color)}
              className={`relative h-6 w-6 rounded-md border transition-transform hover:scale-110 ${
                backgroundColor === color
                  ? "border-white"
                  : "border-transparent"
              }`}
              style={{
                backgroundColor:
                  color === "transparent" ? "transparent" : color,
              }}
            >
              {color === "transparent" && (
                <div className="absolute inset-0 flex items-center justify-center rounded-md bg-zinc-800">
                  <div
                    className="h-full w-full opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                      backgroundSize: "4px 4px",
                      backgroundPosition: "0 0, 0 2px, 2px -2px, -2px 0px",
                    }}
                  ></div>
                </div>
              )}
            </button>
          ))}
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-800 opacity-50">
            <div
              className="h-full w-full opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                backgroundSize: "4px 4px",
                backgroundPosition: "0 0, 0 2px, 2px -2px, -2px 0px",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Stroke Width */}
      <div>
        <div className="mb-2 text-xs font-medium">Stroke width</div>
        <div className="flex gap-2">
          {[1, 2, 4].map((width) => (
            <button
              key={width}
              onClick={() => setStrokeWidth(width)}
              className={`flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 transition-colors ${
                strokeWidth === width ? "bg-[#4a4a5a]" : "hover:bg-zinc-700"
              }`}
            >
              <div
                className="rounded-full bg-white"
                style={{ height: width, width: "16px" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Stroke Style */}
      <div>
        <div className="mb-2 text-xs font-medium">Stroke style</div>
        <div className="flex gap-2">
          {(["solid", "dashed", "dotted"] as const).map((style) => (
            <button
              key={style}
              onClick={() => setStrokeStyle(style)}
              className={`flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 transition-colors ${
                strokeStyle === style ? "bg-[#4a4a5a]" : "hover:bg-zinc-700"
              }`}
            >
              {style === "solid" && <Minus size={16} />}
              {style === "dashed" && <Minus size={16} className="opacity-50" />}
              {style === "dotted" && (
                <div className="flex gap-0.5">
                  <div className="h-1 w-1 rounded-full bg-white"></div>
                  <div className="h-1 w-1 rounded-full bg-white"></div>
                  <div className="h-1 w-1 rounded-full bg-white"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Sloppiness (Roughness) */}
      <div>
        <div className="mb-2 text-xs font-medium">Sloppiness</div>
        <div className="flex gap-2">
          {[0, 1, 2].map((r) => (
            <button
              key={r}
              onClick={() => setRoughness(r)}
              className={`flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 transition-colors ${
                roughness === r ? "bg-[#4a4a5a]" : "hover:bg-zinc-700"
              }`}
            >
              {/* Icons representing sloppiness */}
              {r === 0 ? (
                <Minus size={16} />
              ) : r === 1 ? (
                <span className="text-xs">~</span>
              ) : (
                <span className="text-xs">~~</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Edges (Roundness) */}
      <div>
        <div className="mb-2 text-xs font-medium">Edges</div>
        <div className="flex gap-2">
          {(["sharp", "round"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRoundness(r)}
              className={`flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 transition-colors ${
                roundness === r ? "bg-[#4a4a5a]" : "hover:bg-zinc-700"
              }`}
            >
              {r === "sharp" ? <Square size={14} /> : <Circle size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* Opacity */}
      <div>
        <div className="mb-2 text-xs font-medium">Opacity</div>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-[#6366f1]"
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-zinc-500">
          <span>0</span>
          <span>100</span>
        </div>
      </div>

      {/* Layers */}
      <div>
        <div className="mb-2 text-xs font-medium">Layers</div>
        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 hover:bg-zinc-700">
            <Download size={14} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 hover:bg-zinc-700">
            <ChevronDown size={14} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 hover:bg-zinc-700">
            <ChevronUp size={14} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 hover:bg-zinc-700">
            <Upload size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

export type FillStyle = "hachure" | "solid" | "zigzag" | "cross-hatch";

interface PropertyBarProps {
  strokeColor: string;
  setStrokeColor: (color: string) => void;
  fillStyle: FillStyle;
  setFillStyle: (style: FillStyle) => void;
}

export function PropertyBar({
  strokeColor,
  setStrokeColor,
  fillStyle,
  setFillStyle,
}: PropertyBarProps) {
  const colors = [
    "#ECECEC", // White/Grey
    "#FF5555", // Red
    "#50FA7B", // Green
    "#8BE9FD", // Cyan
    "#BD93F9", // Purple
    "#FFB86C", // Orange
  ];

  const fillStyles: { id: FillStyle; label: string }[] = [
    { id: "hachure", label: "Hachure" },
    { id: "solid", label: "Solid" },
    { id: "zigzag", label: "Zigzag" },
    { id: "cross-hatch", label: "Cross-hatch" },
  ];

  return (
    <div className="fixed top-20 left-4 z-50 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-3 shadow-2xl backdrop-blur-md">
      <div>
        <div className="mb-2 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
          Stroke
        </div>
        <div className="grid grid-cols-3 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setStrokeColor(color)}
              className={`h-6 w-6 rounded-full border-2 transition-transform hover:scale-110 ${
                strokeColor === color ? "border-white" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-2">
        <div className="mb-2 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
          Fill Style
        </div>
        <div className="flex flex-col gap-1">
          {fillStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setFillStyle(style.id)}
              className={`rounded-lg px-2 py-1.5 text-left text-xs transition-colors ${
                fillStyle === style.id
                  ? "bg-indigo-600 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

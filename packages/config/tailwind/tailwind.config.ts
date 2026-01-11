import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "../../ui/src/**/*.{ts,tsx}",
    "../../../apps/**/app/**/*.{ts,tsx}",
    "../../../apps/**/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/animate")],
}

export default config

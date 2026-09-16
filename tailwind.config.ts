import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF5F5",
        ink: "#060606",
        body: "#434445",
        title: "#313030",
        desc: "#666666",
        mute: "#9B9B9B",
        faint: "#989898",
        rule: "#CBC9D6",
        accent: "#3A53ED",
        "path-blue": "#2C6FFF",
        hover: "rgba(23, 22, 15, 0.035)",
        dot: {
          line: "#C3C1C1",
          fill: "#B4B2B2",
          case: "#A9A7AD",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'Geist Mono'", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.4s cubic-bezier(0.23, 1, 0.32, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;

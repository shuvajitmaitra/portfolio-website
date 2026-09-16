import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'AboutBackground': "url('/src/assets/images/backgrounds/about-background.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;

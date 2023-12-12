/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'AboutBackground': "url('/src/assets/about-bg.png')",
        'firstProject': "url('/src/assets/Inventory-Management.png')",
        'secondProject': "url('/src/assets/novel-nexus.png')",
        'thirdProject': "url('/src/assets/media-hunter.png')",
      }
    },
  },
  plugins: [],
}

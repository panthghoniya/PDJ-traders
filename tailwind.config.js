/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2D4F44',
          light: '#F2EDD1',
          accent: '#5BA298',
          teal: '#8ABEB7',
          black: '#1A2B25',
          background: '#FDFCF7',
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  plugins: [require('tailwindcss-primeui')],
  theme: {
    extend: {
      colors: {
        lightblue: "#CAF0F8",
        blue: "#00B4D8",
        darkblue: "#03045E",
        zinc: "#18181b"
      }
    },
  },
  plugins: [],
}

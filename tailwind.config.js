/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      coinguard: ["Barlow", "sans-serif"]
    }
  },
  daisyui: {
    themes: ['synthwave']
  },
  plugins: [require("daisyui")],
}
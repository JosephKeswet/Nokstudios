/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Some useful comment
    extend: {
      fontFamily: {
        'Lora': ['Lora', 'serif'],
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const withMt = require("@material-tailwind/react/utils/withMT");

export default withMt({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1268px'
    },
    extend: {
      colors: {
        blue: {
          deep: "#2D5BE4",
          light: "#6F87CF",
        },
        sands: {
          dark: "#ECA643",
          light: "#FBDDB4",
        },
        babyPowder: "#F5F7F9"
      }
    },
    fontFamily: {
      body: ["Outfit", "sans-serif"],
    }
  },
  plugins: [
    // require('daisyui'),
  ],
});

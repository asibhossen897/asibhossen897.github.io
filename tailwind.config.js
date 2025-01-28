/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#fbad18",
        dark: "#24252a"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        bengali: ["Noto Serif Bengali", "serif"]
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
} 
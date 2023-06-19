/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#0E8784",
        "dark-grey-blue": "#333D4B",
        "pale-orange": "#FDD6BA",
        grey: "#83888F",
        "light-cream": "#FEFCF7",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};

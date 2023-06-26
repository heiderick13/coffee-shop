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
      backgroundImage: {
        "mobile-coffeePress":
          "url(./src/assets/home/mobile/image-hero-coffeepress.jpg)",
        "desktop-coffeePress":
          "url(./src/assets/home/desktop/image-hero-coffeepress.jpg)",
        "mobile-whitecup":
          "url(./src/assets/about/mobile/image-hero-whitecup.jpg)",
        "desktop-whitecup":
          "url(./src/assets/about/desktop/image-hero-whitecup.jpg)",
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        "bg-text": "background-color, color",
      },
      backgroundImage: {
        "light-bgimg": "url('/src/assets/light-Background.png')",
        "dark-bgimg": "url('/src/assets/dark-Background.png')",
      },
      colors: {
        primary: "#4FC3F7",

        light: {
          text: "#484E53",
          bg: "#E0E8F6",
        },

        dark: {
          text: "#E1E1E1",
          bg: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      red: colors.red,
      teal: colors.teal,
      gray: colors.gray,
      white: colors.white,
      purple: colors.purple,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

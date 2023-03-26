/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [["./src/**/*.{html,js}"]],
  theme: {
    colors: {
      primary: "#343D89",
      secondary: "#D9F852",
      tertiary: "#363635",
      white: "#FFFFFF",
      black: "#141313",
    },
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
    fontSize: {
      headingOne: "72px",
      headingTwo: "56px",
      headingThree: "32px",
      headingFour: "26px",
      bodyOne: "22px",
    },
    extend: {},
  },
  plugins: [],
};

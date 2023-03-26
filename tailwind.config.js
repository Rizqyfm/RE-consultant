/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      bodyTwo: "16px",
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};

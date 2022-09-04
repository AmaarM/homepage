/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        base: {
          light: "#F7FBFC",
          dark: "#212121",
        },
      },
      textColor: {
        skin: {
          base: "#D1D5DB",
          inverted: "#000000",
          neon: "#073642",
          gray: "#333333",
        },
      },
    },
  },
  plugins: [],
};

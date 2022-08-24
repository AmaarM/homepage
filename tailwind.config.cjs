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
          base: "#ffffff",
          inverted: "#000000",
        },
      },
    },
  },
  plugins: [],
};

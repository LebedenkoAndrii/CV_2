/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        secHeight: "650px",
      },
      backgroundSize: {
        s300: "300% 300%",
      },
    },
  },
  plugins: [],
};

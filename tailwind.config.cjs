/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    maxWidth: {
      maxWidth: "1100px",
    },
    margin: {
      margin: "0 auto",
    },
  },

  plugins: [require("tailwind-scrollbar")],
};

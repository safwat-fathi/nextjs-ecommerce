/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: { DEFAULT: "#f53d57", 500: "#f40c2c", 800: "#cf001d" },
        secondary: { DEFAULT: "#1f2937", 500: "#10151d", 800: "#0b0e13" },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      colors: {
        primary: "#F96E71",
        secondary: "#0D233A",
      },
      fontFamily: {
        mada: ["Mada", "serif"],
      },
    },
  },
  plugins: [],
};

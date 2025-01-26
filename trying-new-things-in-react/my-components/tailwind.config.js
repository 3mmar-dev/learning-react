/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "hsl(var(--background))",
      content: "hsl(var(--content))",
      gray: "hsl(var(--gray))",
      "dark-gray": "hsl(var(--dark-gray))",
      primary: "hsl(var(--primary))",
      accent: "hsl(var(--accent))",
    },
    padding: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "64px",
    },
    margin: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "64px",
      auto: "auto",
    },
    gap: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "64px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      geist: ["Geist", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

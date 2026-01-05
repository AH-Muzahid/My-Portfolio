/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        "background-light": "#f8f9fa",
        "background-dark": "#1f1f1f",
        "card-light": "#ffffff",
        "card-dark": "#e5e5e5",
      },
      fontFamily: {
        display: ["'DM Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
}
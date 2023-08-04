/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Assistant, sans-serif",
      },
      colors: {
        "main-50" : "#fafafa",
        "main-100": "#f4f4f5",
        "main-200": "#e4e4e7",
        "main-300": "#d4d4d8",
        "main-400": "#a1a1aa",
        "main-500": "#71717a",
        "main-600": "#52525b",
        "main-700": "#3f3f46",
        "main-800": "#27272a",
        "main-900": "#18181b",
        "main-950": "#09090b",

        "primary-50" : "#ecfdf5",
        "primary-100": "#d1fae5",
        "primary-200": "#a7f3d0",
        "primary-300": "#6ee7b7",
        "primary-400": "#34d399",
        "primary-500": "#10b981",
        "primary-600": "#059669",
        "primary-700": "#047857",
        "primary-800": "#065f46",
        "primary-900": "#064e3b",
        "primary-950": "#022c22",

        "primary-50" : "#fff7ed",
        "primary-100": "#ffedd5",
        "primary-200": "#fed7aa",
        "primary-300": "#fdba74",
        "primary-400": "#fb923c",
        "primary-500": "#f97316",
        "primary-600": "#ea580c",
        "primary-700": "#c2410c",
        "primary-800": "#9a3412",
        "primary-900": "#7c2d12",
        "primary-950": "#431407",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

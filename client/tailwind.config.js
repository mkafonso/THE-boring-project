/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Assistant, sans-serif",
      },
      colors: {
        "main-50" : "#f8fafc",
        "main-100": "#f1f5f9",
        "main-200": "#e2e8f0",
        "main-300": "#cbd5e1",
        "main-400": "#94a3b8",
        "main-500": "#64748b",
        "main-600": "#475569",
        "main-700": "#334155",
        "main-800": "#1e293b",
        "main-900": "#0f172a",
        "main-950": "#020617",

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
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

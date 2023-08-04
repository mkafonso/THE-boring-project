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

        "primary-50" : "#fff1f2",
        "primary-100": "#ffe4e6",
        "primary-200": "#fecdd3",
        "primary-300": "#fda4af",
        "primary-400": "#fb7185",
        "primary-500": "#f43f5e",
        "primary-600": "#e11d48",
        "primary-700": "#be123c",
        "primary-800": "#9f1239",
        "primary-900": "#881337",
        "primary-950": "#4c0519",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

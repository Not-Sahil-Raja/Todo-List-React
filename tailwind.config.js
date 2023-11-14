/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightbrown: "#7F675B",
        snow: "#FFFAFB",
        ashgray: "#A1B0AB",
      },
    },
  },
  plugins: [],
};

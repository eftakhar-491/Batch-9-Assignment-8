/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PD: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};

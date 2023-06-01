/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserret", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

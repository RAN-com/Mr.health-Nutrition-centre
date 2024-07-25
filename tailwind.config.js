/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTomato: 'rgb(255, 99, 71)',
      },
    },
  },
  plugins: [],
}

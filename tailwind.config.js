/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lastica: ['Lastica', 'sans-serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        tt_interphases: ['TT-interphases'],
      },
    },
  },
  plugins: [],
};
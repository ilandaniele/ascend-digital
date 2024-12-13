/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
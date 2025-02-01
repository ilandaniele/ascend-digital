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
      '3xl': '1900px'
    },
    extend: {
      colors: {
        'custom-pink': 'rgb(215, 60, 190)',
      },
      fontFamily: {
        lastica: ['Lastica', 'sans-serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        tt_interphases: ['TT-interphases'],
      },
      fontSize: {
        '8xl': '6rem',  // 96px
        '9xl': '8rem',  // 128px
        '10xl': '10rem', // 160px
        '11xl': '11rem', // 160px
        '12xl': '12rem'
        // Agrega más tamaños según tus necesidades
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      opacity: {
        '15': '0.15',
      },
    },
  },
  plugins: [],
};
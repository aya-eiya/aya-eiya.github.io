const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      brand: {
        dark: '#1A374D',
        base: '#406882',
        light: '#6998AB',
        bright: '#B1D0E0',
      },
      white: colors.white,
      transparent: colors.transparent,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

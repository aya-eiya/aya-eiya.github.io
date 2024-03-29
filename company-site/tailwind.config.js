const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
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
      gray: colors.gray,
      red: colors.red,
      transparent: colors.transparent,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0px 1px 2px white',
        },
      })
    },
  ],
}

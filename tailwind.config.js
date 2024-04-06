/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        regular: 'Roboto_400Regular',
        bold: 'Roboto_700Bold',
        medium: 'Roboto_500Medium',
      },
      colors: {
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
        },
        green: {
          500: '#00292E',
          400: '#28494E',
          200: '#9FF9CC',
        },
        orange: {
          500: '#F48F56',
        },
      },
    },
  },
  plugins: [],
}

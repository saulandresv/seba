/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#262EBA',
        'secondary': '#3BA7E3',
        'accent': '#DC2626',
        'dark': '#0A0A0A',
        'gray-dark': '#1A1A1A',
        'gray-medium': '#1E1E1E',
        'gray-light': '#D1D5DB'
      },
      fontFamily: {
        'sans': ['Rajdhani', 'sans-serif']
      }
    }
  },
  plugins: []
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'mc-primary': {
          'light': '#FEF5EE',
          'DEFAULT': '#FF6F4E',
          'dark': '#7c1812',
        },  
        'mc-secondary': {
          /* 'light': '#', */
          'DEFAULT': '#293e8f',
          'dark': '#1b2450',
        },
        'mc-base': '#3D3B34',
        'mc-accent': '#3B0BCA',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        body: ['Montserrat', 'Arial', 'sans-serif'],
        navbar: ['Inter', 'Arial', 'sans-serif'],
        nombrePlatos: ['Roboto Condensed', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

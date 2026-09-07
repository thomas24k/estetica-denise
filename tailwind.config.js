/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7A00', // The requested orange heart color
          dark: '#2A2A2A',
          light: '#FFF9F5', // very light orange/beige
          gray: '#8C8C8C'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // For elegant headings like borgochic
      }
    },
  },
  plugins: [],
}

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
          yellow: '#F0D030',
          dark: '#2C2F34',
          mustard: '#E0B605',
          gray: '#777A80',
          surface: '#1E2024'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

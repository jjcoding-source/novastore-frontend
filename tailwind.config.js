/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D4C8',     
        'primary-dark': '#00B3A8',
      },
      fontFamily: {
        sans: ['Inter', 'system_ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
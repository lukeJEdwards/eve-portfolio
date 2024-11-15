/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'serif': ['Inter']
      },
      colors:{
        'green':'#74A769'
      }
    },
  },
  plugins: [],
}
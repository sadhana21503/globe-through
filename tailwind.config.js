/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        g: '#00AA90',
        y: '#FFDB59',
      },
      fontFamily: {
        abhaya: ['Abhaya Libre', 'serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        times: ['Times New Roman', 'serif'],
        manrope: ['Manrope', 'sans-serif'], // Add Manrope here
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'w-custom-769': '769px',
        'w-custom-400': '400px',
      },
      margin: {
        'custom-auto': '0 auto',
      },
    },
  },
  plugins: [],
}
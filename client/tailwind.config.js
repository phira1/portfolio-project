/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // moves half of the width
        },
      },
      animation: {
        slide: 'slide 60s linear infinite', // adjust duration as you like
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '100%, 0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-out infinite',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        taki: 'taki 2s infinite',
      },
      keyframes: {
        taki: {
          '0%, 100%': {
            transform: 'rotate(0deg) scale(1)',
            backgroundColor: '#FF69b4'
          },
          '50%': {
            transform: 'rotate(-15deg) scale(0.9)',
            backgroundColor: '#FF1439'
          },
          '75%': {
            transform: 'rotate(-15deg) scale(1.05)',
            backgroundColor: '#FFc0cb'
          },
        },
      },
    },
  },
  plugins: [],
}

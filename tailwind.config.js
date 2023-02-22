/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '20%': { transform: 'rotateY(-45deg)' },
          '40%': { transform: 'rotateY(45deg)' },
          '60%': { transform: 'rotateY(-15deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        slider: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: ' translateX(-25%)' },
          '50%': { transform: 'translateX(-50%)' },
          '75%': { transform: 'translateX(-75%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'portfolio-animation': 'wave 2s linear forwards',
        'slider-animation': 'slider 20s infinite',
      },
    },
  },
  plugins: [],
}


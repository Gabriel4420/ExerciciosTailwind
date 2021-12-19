module.exports = {
  purge: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  darkMode:false,
  content: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  variants:{
    extend: {},
  },
  plugins: [],
}

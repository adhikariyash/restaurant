/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/restaurant.jpg')",
      },
      boxShadow: {
        neon: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'pulse-neon': 'pulse-neon 3s infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': {
            boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
          },
          '50%': {
            boxShadow: '0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00',
          },
        },
      },
    },
  },
  plugins: [],
}

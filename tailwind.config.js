/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.7)',
      },
      colors: {
        pink: {
          light: '#ff69b4',
          dark: '#ff1493',
        },
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-out',
        'fade-up': 'fade-up 1s ease-out',
      },
    },
  },
  plugins: [],
}

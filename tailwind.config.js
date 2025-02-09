/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'avenir': ['Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: {},
  utilities: {
    '.no-scrollbar::-webkit-scrollbar': {
      display: 'none',
    },
    '.no-scrollbar': {
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',
    },
  },
} 
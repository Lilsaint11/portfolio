/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: theme => ({
        'half-drug': "40em 0 0 30em"
      }),
      screens: {
        'ipad': '768px',
      }
    },
  },
  plugins: [],
}


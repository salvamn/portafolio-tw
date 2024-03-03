/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'quick': ["Quicksand", "sans - serif"],
    },
    future: {
      hoverOnlyWhenSupported: true
    }
  },
  plugins: [],
}


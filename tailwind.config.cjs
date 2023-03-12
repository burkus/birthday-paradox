/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateRows: {
        '3l': 'auto auto auto'
      }
    },
  },
  plugins: [],
}

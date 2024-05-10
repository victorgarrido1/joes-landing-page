const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
    theme: {
    extend: {
      fontFamily: {
        "freeman": ['"Freeman"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
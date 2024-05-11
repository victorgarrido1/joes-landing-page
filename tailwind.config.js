const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "freeman": ['"Freeman"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // Define custom colors here
        teal: {
          50: '#eef2ff',
          // Add more shades as needed
        },
        custom: {
          50: '#fef9e6',
          100: '#fef0cc',
          200: '#fde39f',
          300: '#fcd772',
          400: '#fcc745',
          500: '#fed7aa',
          600: '#fbc786',
          700: '#f7a762',
          800: '#f3933d',
          900: '#eb7f19',
        },
      },
    },
  },
  plugins: [],
};
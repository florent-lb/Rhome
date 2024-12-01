/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3a81ff',
        dark: '#333333',
        "second-dark": '#555555'
      }
    },
  },
  plugins: [],
}


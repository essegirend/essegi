/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  prefix: 't-',
  theme: {
    extend: {
      fontFamily:{
        borel: '"borel", "cursive"', 
      }
    },
  },
  plugins: [],
}


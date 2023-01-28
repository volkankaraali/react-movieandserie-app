module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      grayscale: ['hover', 'focus'],
      opacity: ['active'],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}

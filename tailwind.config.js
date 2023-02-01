module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
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

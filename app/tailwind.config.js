module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-color': '#45363B',
        'nav-color': '#a29b9d',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

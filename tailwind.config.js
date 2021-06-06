const tailwindcss = require("tailwindcss");

module.exports = {
  mode: 'jit',
  purge: [
     './dist/**/*.html',
   ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require('@tailwindcss/forms')
  ],
  corePlugins: {
    appearance: false,
  }
}

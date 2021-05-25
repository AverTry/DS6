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
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require('@tailwindcss/forms')
  ],
  corePlugins: {
    appearance: false,
  }
}

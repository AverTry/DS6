const tailwindcss = require("tailwindcss");

module.exports = {
  mode: 'jit',
  purge: {
    enabled: false, // or true to purge unused css
    preserveHtmlElements: false,
    content: ['dist/*.html'], // files checked for purging
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      transformOrigin: {
        "0": "0%",
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

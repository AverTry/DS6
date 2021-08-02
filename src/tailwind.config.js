module.exports = {
  mode: 'jit',
  purge: [
     './**/*.html',
   ],
  darkMode: 'class', // * or 'media' or 'class'
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
        brand: '#1992d4',
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
      },
      spacing: {
        '5.5': '1.4rem',
      },
      width: {
        fill: '-webkit-fill-available'
      }
    },
  }
}

module.exports = {
    fontFamily: {
      'sans': ['Georgia', 'Sans-serif']
    },
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '101': '1.01',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    textSizes: {
      sm: {
        min: '16px',
        max: '24px',
        minvw: '320px',
        maxvw: '1280px'
      },
      md: {
        min: '20px',
        max: '40px',
        minvw: '320px',
        maxvw: '1280px'
      },
      lg: {
        min: '24px',
        max: '65px',
        minvw: '320px',
        maxvw: '1280px'
      }
    },
    modules: {
      textSizes: false // disable the core module
    },
    plugins: [
      require('tailwindcss-fluid')({
        textSizes: true // use the settings defined the core config (above)
      })
    ],
  }
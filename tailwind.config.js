/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/*.{html,js}', './parts/*.{html,js}', './templates/*.{html,js}', './*.{html,js}'],
  theme: {
    screens: {
      'dxl': '2560px',
      'dlg': '1920px',
      'dmd': '1536px', 
      'dsm': '1366px',
      'dxs': '1280px', 
      'tlg': '810px',
      'tsm': '768px',
      'mlg': '390px',
      'msm': '360px',
    },

    colors: {
      'hemautoWhite': '#fafffa',
      'hemautoLightGray': '#aab2aa',
      'hemautoMediumGray': '#5a645a',
      'hemautoDarkGray': '#374137',
      'hemautoGray': '#333333',
      'hemautoBlack': '#0a0f0a',
      'hemautoGreen': '#00ff00',
      'hemautoLightGreen': '#0a8f0a',
      'hemautoMediumGreen': '#0f570f',
      'hemautoDarkGreen': '#141e14',
      'hemautoSuccess': '#34d399',
      'hemautoInfo': '#60a5fa',
      'hemautoWarning': '#fb923c',
      'hemautoDanger': '#ec4899',
      'hemautoGreenSmoke': '#c8e1c8',
      'hemautoTransparent': '#00000000',
    },

    fontFamily:{
      'hemautoFontPlay': 'Play',
      'hemautoFontUrbanist': 'Urbanist',
      'hemautoFontRoadRage': '"Road Rage"',
      'hemautoFontTiltWarp': '"Tilt Wrap"',
    },
    extend: {},
  },
  variants: {
    display:['group-hover']
  },
  plugins: [],
}

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
      'hemautoWhite': '#f5fff5',
      'hemautoLightGray': '#cdcdcd',
      'hemautoMediumGray': '#7f7f7f',
      'hemautoDarkGray': '#141414',
      'hemautoGray': '#333333',
      'hemautoBlack': '#0a0f0a',
      'hemautoGreen': '#00ff00',
      'hemautoLightGreen': '#afffaf',
      'hemautoMediumGreen': '#007f00',
      'hemautoDarkGreen': '#003300',
      'hemautoTrueWhite': '#ffffff',
      'hemautoTransparent': '#00000000',
    },

    container: {
      center: true,
    },

    fontFamily:{
      'hemautoFontPlay': 'Play',
      'hemautoFontUrbanist': 'Urbanist',
      'hemautoFontRoadRage': '"Road Rage"',
      'hemautoFontTiltWarp': '"Tilt Warp"',
    },
    extend: {
      backgroundImage: {
        'header-1': "url(./owned/gray-header.svg)",
        'service': "url(./owned/green-glow-laptop.svg)",
      },
    },
  },
  variants: {
    display:['group-hover']
  },
  plugins: [],
}

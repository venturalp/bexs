export const mainTheme = {
  pxToRem: (px, base = 16) => `${px / base}rem`,
  background: '#F7F7F7',
  mainColor: '#DE4B4B',
  text: '#3C3C3C',
  textContrast: '#ffffff',
  textShadow: '0px 1px 2px #000000B3',
  disabledColor: '#C9C9C9',
  error: '#EB5757',
  success: '#4BB543',
  screens: {
    small: 400,
    tabletV: 768,
    tablet: 1024,
    smallDesktop: 1280,
    desktop: 1366,
  },
}

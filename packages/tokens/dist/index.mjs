// src/colors.ts
const colors = {
  white: '#fff',
  gray100: '#e1e1e6',
  gray200: '#a9a9b2',
  gray400: '#7c7c8a',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292e',
  gray800: '#202024',
  gray900: '#121214',
  green300: '#00b37e',
  green500: '#00875f',
  green700: '#015f43',
  green900: '#00291d',
}

// src/space.ts
const space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  40: '10rem',
  64: '16rem',
  80: '20rem',
}

// src/radius.ts
const radius = {
  px: '1px',
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '16px',
  full: '9999px',
}

// src/fonts.ts
const fonts = {
  default: 'Roboto, sans-serif',
  code: 'monospace',
}

// src/font-sizes.ts
const fontSizes = {
  xxs: '0.625rem',
  // 10px
  xs: '0.75rem',
  // 12px
  sm: '0.875rem',
  // 14px
  md: '1rem',
  // 16px
  lg: '1.125rem',
  // 18px
  xl: '1.25rem',
  // 20px
  '2xl': '1.5rem',
  // 24px
  '4xl': '2rem',
  // 32px
  '5xl': '2.25rem',
  // 36px
  '6xl': '3rem',
  // 48px
  '7xl': '4rem',
  // 64px
  '8xl': '5rem',
  // 80px
  '9xl': '6rem',
  // 96px
}

// src/font-weights.ts
const fontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
}

// src/line-heights.ts
const lineHeights = {
  shorter: '125%',
  short: '140%',
  base: '160%',
  tall: '180%',
}
export { colors, fontSizes, fontWeights, fonts, lineHeights, radius, space }

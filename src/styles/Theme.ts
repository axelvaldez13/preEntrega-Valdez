export interface ITheme {
  font: Record<string, string>
  color: {
    white: string
    primary: Record<number, string>
    success: Record<number, string>
    warning: Record<number, string>
    danger: Record<number, string>
    gray: Record<number, string>
  }
}

const theme: ITheme = {
  font: {
    textXxl: '3rem/3.5rem Montserrat Alternates, sans-serif',
    textXl: '1.5rem/2rem Montserrat Alternates, sans-serif',
    fontMedium: '1rem/1.5rem Montserrat Alternates, sans-serif',
    fontSm: '0.875rem/1rem Montserrat Alternates, sans-serif',
    fontXs: '0.5rem/0.75rem Montserrat Alternates, sans-serif'
  },
  color: {
    primary: {
      100: '#C9FBF6',
      200: '#94F7F6',
      300: '#5DDDE7',
      400: '#34B9CF',
      500: '#018AAF',
      600: '#006B96',
      700: '#00507D',
      800: '#003965',
      900: '#002953'
    },
    success: {
      100: '#F2FBCD',
      200: '#E3F79D',
      300: '#C9E969',
      400: '#AAD342',
      500: '#82B710',
      600: '#6A9D0B',
      700: '#548308',
      800: '#406A05',
      900: '#315703'
    },
    warning: {
      100: '#FEF2CC',
      200: '#FDE199',
      300: '#F9CA66',
      400: '#F4B340',
      500: '#ED9004',
      600: '#CB7302',
      700: '#AA5902',
      800: '#894201',
      900: '#713200'
    },
    danger: {
      100: '#FCD9D3',
      200: '#F9ADA8',
      300: '#EE7A7F',
      400: '#DE5769',
      500: '#C9264C',
      600: '#AC1B4B',
      700: '#901348',
      800: '#740C42',
      900: '#60073E'
    },
    gray: {
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717'
    },
    white: '#fff'
  }
}

export default theme

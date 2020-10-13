import createTheme from './createTheme'

/**
 * App default theme instance.
 */
export default createTheme({
  name: 'Default',
  palette: {
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#c8291e',
    },
    background: {
      default: '#ffffffe6',
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: '#ff5722',
        backgroundColor: 'white',
      },
    },
  },
})

import createTheme from './createTheme'

/**
 * App dark theme instance.
 */
export default createTheme({
  name: 'Dark',
  palette: {
    type: 'dark',
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#c8291e',
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#383737',
        color: '#fff',
      },
    },
  },
})

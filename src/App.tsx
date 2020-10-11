import React from 'react'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import { ThemeProvider, ThemeProviderProps } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'

import { Meta } from './layouts'

import { defaultTheme, GlobalStyle } from './styles'

export type AppProviderProps = ThemeProviderProps<any>

const App = ({ children }: AppProviderProps) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyle />
          <Meta />
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export { App }
export default App

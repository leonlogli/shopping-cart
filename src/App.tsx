import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import { ThemeProvider, ThemeProviderProps } from './context'

import { Meta } from './layouts'

export type AppProviderProps = ThemeProviderProps

const App = ({ children, initialTheme }: AppProviderProps) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider initialTheme={initialTheme}>
        <Meta />
        {children}
      </ThemeProvider>
    </StylesProvider>
  )
}

export { App }
export default App

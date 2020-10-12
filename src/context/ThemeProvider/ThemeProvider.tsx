import React, { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  ThemeProvider as MuiThemeProvider,
  ThemeProviderProps as MuiThemeProviderProps,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import cookie from 'js-cookie'

import { GlobalStyle, themes, Theme, defaultTheme } from '../../styles'
import { useMediaQuery } from '../../hooks'

function useThemeProvider(initialTheme: Theme['name'] | 'System' = 'Default') {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [theme, setTheme] = useState(() => {
    if (initialTheme === 'System') {
      const systemThemeName = prefersDarkMode ? 'Dark' : 'Default'

      return themes.find((t) => t.name === systemThemeName) || defaultTheme
    }

    return themes.find((t) => t.name === initialTheme) || defaultTheme
  })

  const changeTheme = (name: Theme['name'] | 'System') => {
    let newTheme

    if (name === 'System') {
      const systemThemeName = prefersDarkMode ? 'Dark' : 'Default'

      newTheme = themes.find((t) => t.name === systemThemeName)
    } else newTheme = themes.find((t) => t.name === name)

    if (newTheme) {
      if (newTheme.name !== theme.name) {
        setTheme(newTheme)
      }
      cookie.set('theme', newTheme.name, { expires: 365 })
    }
  }

  useEffect(() => {
    const savedTheme = cookie.get('theme')

    if (savedTheme !== theme.name) {
      changeTheme(savedTheme as any)
    }
  }, [])

  return {
    theme,
    setTheme: changeTheme,
  }
}

type ThemeState = Readonly<ReturnType<typeof useThemeProvider>>

const ThemeContext = createContext<ThemeState>({
  theme: defaultTheme,
  setTheme: () => null,
})

/**
 * Hook for child components to get the theme state and re-render when it changes.
 */
const useTheme = () => {
  return useContext(ThemeContext)
}

export type ThemeProviderProps = Pick<MuiThemeProviderProps, 'children'> & {
  initialTheme?: Theme['name']
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const value = useThemeProvider(initialTheme)

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={value.theme}>
        <StyledThemeProvider theme={value.theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyle />
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, useTheme }
export default ThemeProvider

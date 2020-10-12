import { Theme } from './createTheme'
import appDefaultTheme from './defaultTheme'
import darkTheme from './darkTheme'

/**
 * App themes
 */
const themes: ReadonlyArray<Theme> = [appDefaultTheme, darkTheme] as const

/**
 * App default theme.
 */
const defaultTheme = appDefaultTheme

export { defaultTheme, themes }
export default themes
export * from './createTheme'

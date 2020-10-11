import createMuiTheme, {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@material-ui/core/styles/createMuiTheme'

/**
 * App theme
 */
export interface Theme extends MuiTheme {
  name: 'Default' | 'Dark'
}

export type ThemeOptions = Omit<MuiThemeOptions, 'breakpoints'> &
  Pick<Theme, 'name'>

/**
 * Create app theme with with a base breakpoints values
 * @param options theme options
 */
export const createTheme = (options: ThemeOptions) => {
  return createMuiTheme({
    ...options,
    breakpoints: {
      values: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
    },
  }) as Theme
}

export default createTheme

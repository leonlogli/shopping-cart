import useMuiMediaQuery, { Options } from '@material-ui/core/useMediaQuery'
import { Theme } from '../styles'

function useMediaQuery(
  query: string | ((theme: Theme) => string),
  options?: Options
) {
  return useMuiMediaQuery<Theme>(query, options)
}

export { useMediaQuery }
export default useMediaQuery

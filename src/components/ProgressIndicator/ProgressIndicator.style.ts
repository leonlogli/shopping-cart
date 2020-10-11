import styled, { css } from 'styled-components'
import MuiCircularProgress from '@material-ui/core/CircularProgress'
import MuiLinearProgress from '@material-ui/core/LinearProgress'

import { ProgressIndicatorProps } from './ProgressIndicator'

const positionStyle = (position: ProgressIndicatorProps['position']) => {
  if (position === 'top') {
    return css`
      position: fixed;
      z-index: 1032;
      top: 0;
      left: 0;
    `
  }

  return css`
    position: fixed;
    z-index: 1032;
    top: 50vh;
    left: 50vw;
  `
}

const CircularProgress = styled(MuiCircularProgress)<ProgressIndicatorProps>`
  ${({ position }) => positionStyle(position)};
`

const LinearProgress = styled(MuiLinearProgress)<ProgressIndicatorProps>`
  height: 3px;
  width: 100%;
  ${({ position }) => positionStyle(position)};
  left: 0;
`

export { CircularProgress, LinearProgress }

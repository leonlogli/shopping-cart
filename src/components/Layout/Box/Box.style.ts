import styled, { css } from 'styled-components'
import Box from '@material-ui/core/Box'

import { BoxProps } from '.'

export const StyledBox = styled(Box)<BoxProps>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`

export default StyledBox

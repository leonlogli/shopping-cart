import React, { forwardRef } from 'react'
import { BoxProps as BaseBoxProps } from '@material-ui/core/Box'

import StyledBox from './Box.style'

export type BoxProps = BaseBoxProps & {
  /**
   * If `true`, the box will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
}

/**
 * The Box component serves as a wrapper component for most of the CSS utility needs.
 */
const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, ...other } = props
  // Workaround to pass ref without having type checking issue
  const refProp = { ref }

  return (
    <StyledBox {...refProp} {...other}>
      {children}
    </StyledBox>
  )
})

export { Box }
export default Box

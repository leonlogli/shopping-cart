import React from 'react'
import { TypographyProps } from '@material-ui/core/Typography'

import StyledText from './Text.style'

export type TextProps = Omit<TypographyProps, 'variant'> & {
  /**
   * Applies the theme typography styles.
   */
  variant?:
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | 'inherit'
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Text = ({ children, ...other }: TextProps) => (
  <StyledText {...other}>{children}</StyledText>
)

export { Text }
export default Text

import React from 'react'
import { ColProps as BaseColProps } from 'styled-bootstrap-grid'

import StyledCol from './Col.style'

export type ColProps = BaseColProps & {
  children: React.ReactNode
}

const Col = ({ children, ...other }: ColProps) => (
  <StyledCol {...other}>{children}</StyledCol>
)

export { Col }
export default Col

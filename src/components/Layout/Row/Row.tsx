import React from 'react'
import { RowProps as BaseContainerProps } from 'styled-bootstrap-grid'

import StyledRow from './Row.style'

export type RowProps = BaseContainerProps & {
  children: React.ReactNode
}

const Row = ({ children, ...other }: RowProps) => (
  <StyledRow {...other}>{children}</StyledRow>
)

export { Row }
export default Row

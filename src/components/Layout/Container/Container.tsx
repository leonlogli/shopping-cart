import React from 'react'
import { ContainerProps as BaseContainerProps } from 'styled-bootstrap-grid'

import StyledContainer from './Container.style'

export type ContainerProps = BaseContainerProps & {
  children: React.ReactNode
}

const Container = ({ children, ...other }: ContainerProps) => (
  <StyledContainer {...other}>{children}</StyledContainer>
)

export { Container }
export default Container

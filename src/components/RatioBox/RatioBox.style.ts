import styled from 'styled-components'

import { Box } from '..'

const ContainerBox = styled(Box)`
  position: relative;
  width: 100%;

  &:before {
    content: '';
    display: block;
    padding-top: ${({ ratio }: any) => ratio}%; /* ratio of 1:0.75*/
  }
`

const InnerBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`

export { ContainerBox, InnerBox }

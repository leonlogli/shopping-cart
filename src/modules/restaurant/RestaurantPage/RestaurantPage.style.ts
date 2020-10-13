import styled, { css } from 'styled-components'

import { Box } from '../../../components'

const ImageContainer = styled(Box)`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 120px;
  height: calc(100vw / 6.2 - 1px);
  width: 100%;
  z-index: 1;

  ${({ image }: any) => css`
    background-image: url(${image});
  `}
`

const RestaurantPageRoot = styled(Box)``

export { RestaurantPageRoot, ImageContainer }

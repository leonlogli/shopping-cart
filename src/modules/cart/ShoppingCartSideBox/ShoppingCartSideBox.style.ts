import styled, { css } from 'styled-components'

import { Box } from '../../../components'

const ShoppingCartSideBoxRoot = styled(Box)`
  min-width: 400px;
  width: 400px;
  display: none;

  > div {
    position: sticky;
    top: 0;
    right: 0;
    z-index: 2;
    overflow-y: auto;
    max-height: 100vh;
    height: auto;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  .ps__rail-x,
  .ps__rail-y {
    opacity: 0.6;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.up('lg')} {
      display: block;
      margin-left: 32px;
    }
  `}
`

export { ShoppingCartSideBoxRoot }

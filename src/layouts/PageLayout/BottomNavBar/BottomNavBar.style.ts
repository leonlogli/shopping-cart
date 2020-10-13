import styled, { css } from 'styled-components'
import AppBar from '@material-ui/core/AppBar'

import { ResponsiveDialog } from '../../../components'

const BottomNavBarRoot = styled(AppBar)`
  top: auto;
  bottom: 0;
`

const ShoppingCartDialog = styled(ResponsiveDialog)`
  .Cart {
    padding: 8px 0;
    box-shadow: none;

    > .Title {
      display: none;
    }

    .ShoppingCartIcon {
      margin-top: calc(50vh - 206px);
    }

    ${({ theme }) => css`
      ${theme.breakpoints.up('md')} {
        .ShoppingCartIcon {
          margin-top: 0;
        }
      }
    `}
  }
`

export { BottomNavBarRoot, ShoppingCartDialog }

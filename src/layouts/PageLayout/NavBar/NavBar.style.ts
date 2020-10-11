import styled, { css } from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'

import { ToolBar } from '../../../components'

const SideDrawer = styled(Drawer)`
  > .MuiPaper-root {
    width: 400px;
    min-height: 100vh;

    ${({ theme }) => css`
      ${theme.breakpoints.up('lg')} {
        max-width: 480px;
      }
    `}
  }

  .ShoppingCartIcon {
    margin-top: calc(50vh - 182px);
  }

  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.4);
  }
`

const NavToolBar = styled(ToolBar)`
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      .Title {
        display: none;
      }
    }
  `}
`

const NavBarRoot = styled(AppBar)`
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);

  nav {
    min-height: 56px;
  }
`

export { NavToolBar, SideDrawer, NavBarRoot }

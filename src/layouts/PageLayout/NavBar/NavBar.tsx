import React from 'react'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import Paper from '@material-ui/core/Paper'
import { AppBarProps } from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'

import { NavToolBar, NavBarRoot, SideDrawer } from './NavBar.style'

import { useModal } from '../../../hooks'
import NavBarLeftMenu from '../NavBarLeftMenu'

export type NavBarProps = AppBarProps

const NavBar = (props: NavBarProps) => {
  const { handleClose, handleOpen, open } = useModal()

  return (
    <NavBarRoot elevation={0} position="static" {...props}>
      <NavToolBar
        component="nav"
        title="Shopping Cart"
        right={
          <>
            <Hidden smDown>
              <IconButton
                aria-label="shopping cart"
                onClick={handleOpen}
                color="inherit"
              >
                <Badge badgeContent={5} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Hidden>
            <IconButton aria-label="change theme" color="inherit">
              <Brightness4Icon />
            </IconButton>
          </>
        }
      >
        <Hidden smDown>
          <NavBarLeftMenu
            restaurants={[
              { id: 1, name: 'Mc Donald' },
              { id: 2, name: 'Eatery Hub' },
            ]}
          />
        </Hidden>
      </NavToolBar>
      <SideDrawer anchor="right" open={open} onClose={handleClose} keepMounted>
        <Paper elevation={0} square>
          ShoppingCart
        </Paper>
      </SideDrawer>
    </NavBarRoot>
  )
}

export { NavBar }
export default NavBar

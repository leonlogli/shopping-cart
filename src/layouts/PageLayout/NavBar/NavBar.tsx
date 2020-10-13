import React from 'react'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import Paper from '@material-ui/core/Paper'
import { AppBarProps } from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import { useSelector } from 'react-redux'

import NavBarLeftMenu from '../NavBarLeftMenu'

import { NavToolBar, NavBarRoot, SideDrawer } from './NavBar.style'

import { useModal } from '../../../hooks'
import { useTheme } from '../../../context'
import { getCartItemsCount, ShoppingCart } from '../../../modules/cart'
import { restaurantsSelector } from '../../../modules/restaurant'

export type NavBarProps = AppBarProps

const NavBar = (props: NavBarProps) => {
  const { handleClose, handleOpen, open } = useModal()
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme.name === 'Dark'
  const cartItemCount = useSelector(getCartItemsCount)
  const { restaurants } = useSelector(restaurantsSelector)

  const handleThemeChange = () => {
    const newTheme = !isDarkMode ? 'Dark' : 'Default'

    setTheme(newTheme)
  }

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
                <Badge badgeContent={cartItemCount} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Hidden>
            <IconButton
              aria-label="change theme"
              color="inherit"
              onClick={handleThemeChange}
            >
              {isDarkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
            </IconButton>
          </>
        }
      >
        <Hidden smDown>
          <NavBarLeftMenu restaurants={restaurants} />
        </Hidden>
      </NavToolBar>
      <SideDrawer anchor="right" open={open} onClose={handleClose} keepMounted>
        <Paper elevation={0} square>
          <ShoppingCart elevation={0} onOrder={handleClose} />
        </Paper>
      </SideDrawer>
    </NavBarRoot>
  )
}

export { NavBar }
export default NavBar

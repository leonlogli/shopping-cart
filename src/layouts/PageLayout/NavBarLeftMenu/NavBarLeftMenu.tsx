import { useRouter } from 'next/router'
import React, { useState } from 'react'
import MenuList from '@material-ui/core/MenuList'

import { Box, BoxProps, NavItem, MenuItem } from '../../../components'
import NavBarBrand from '../NavBarBrand'

import { MenuContainer, MenuPane, RestoPopper } from './NavBarLeftMenu.style'

export type NavBarProps = BoxProps & {
  restaurants: { id: number; name: string }[]
}

/**
 * Desktop left nav menu links
 */
const NavBarLeftMenu = ({ restaurants, ...other }: NavBarProps) => {
  const { pathname } = useRouter()

  const menuLinks = [
    { href: '/', text: 'Home', active: true },
    { href: '', text: 'Restaurants' },
  ]

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleNavItemMouseEnter = (text: string) => (event: any) => {
    if (text === 'Restaurants') {
      setAnchorEl(anchorEl ? null : event.currentTarget)
    }
  }

  return (
    <Box display="flex" alignItems="center" {...other}>
      <NavBarBrand />
      <MenuContainer>
        {menuLinks.map(({ text, ...otherProps }) => (
          <NavItem
            key={text}
            {...otherProps}
            active={otherProps.href === pathname}
            onMouseEnter={handleNavItemMouseEnter(text)}
            onClick={handleNavItemMouseEnter(text)}
          >
            {text}
          </NavItem>
        ))}
        <RestoPopper open={!!anchorEl} anchorEl={anchorEl} keepMounted>
          <MenuPane elevation={4}>
            <MenuList>
              {restaurants.map((resto) => (
                <MenuItem
                  key={resto.id}
                  text={resto.name}
                  href={`/restaurants/${resto.id}`}
                  onClick={handleClose}
                />
              ))}
            </MenuList>
          </MenuPane>
        </RestoPopper>
      </MenuContainer>
    </Box>
  )
}

export { NavBarLeftMenu }
export default NavBarLeftMenu

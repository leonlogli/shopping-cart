import React, { useEffect, ReactElement } from 'react'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import SearchIcon from '@material-ui/icons/Search'
import Home from '@material-ui/icons/Home'
import { AppBarProps } from '@material-ui/core/AppBar'
import { useRouter } from 'next/router'
import Slide from '@material-ui/core/Slide'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Badge from '@material-ui/core/Badge'

import { SlideTransition, BottomNavigation } from '../../../components'

import { BottomNavBarRoot, ShoppingCartDialog } from './BottomNavBar.style'

import { useModal } from '../../../hooks'

export type BottomNavBarProps = AppBarProps

const HideOnScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  )
}

const navLinks = [
  { label: 'Home', value: '/', icon: <Home /> },
  {
    label: 'Restaurants',
    value: '#Restaurants',
    icon: <RestaurantIcon />,
  },
  { label: 'Rechercher', value: '#search', icon: <SearchIcon /> },
  {
    label: 'Cart',
    value: '#ShoppingCart',
    icon: (
      <Badge badgeContent={5} color="secondary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    ),
  },
]

const BottomNavBar = (props: BottomNavBarProps) => {
  const router = useRouter()

  const {
    handleClose: handleShoppingCartClose,
    handleOpen: handleShoppingCartDialogOpen,
    open: openShoppingCartDialog,
  } = useModal()

  const handleChange = (value: string) => {
    if (value === '#ShoppingCart') {
      handleShoppingCartDialogOpen()
    } else router.push(value)
  }

  useEffect(() => {
    // Prefetch nav lins for faster transition
    navLinks.forEach(({ value }) => {
      if (!value.startsWith('#')) {
        router.prefetch(value)
      }
    })
  }, [])

  return (
    <HideOnScroll>
      <BottomNavBarRoot position="fixed" color="primary" {...props}>
        <BottomNavigation links={navLinks} onChange={handleChange} />

        <ShoppingCartDialog
          open={openShoppingCartDialog}
          onClose={handleShoppingCartClose}
          title="ShoppingCart"
          aria-labelledby="ShoppingCart-dialog-title"
          TransitionComponent={SlideTransition}
          keepMounted
        >
          shopping cart
        </ShoppingCartDialog>
      </BottomNavBarRoot>
    </HideOnScroll>
  )
}

export { BottomNavBar }
export default BottomNavBar

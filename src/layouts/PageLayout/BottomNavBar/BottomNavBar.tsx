import React, { useEffect } from 'react'
import { AppBarProps } from '@material-ui/core/AppBar'
import { useRouter } from 'next/router'

import { SlideTransition, BottomNavigation } from '../../../components'
import HideOnScroll from './HideOnScroll'

import { BottomNavBarRoot, ShoppingCartDialog } from './BottomNavBar.style'

import { useModal } from '../../../hooks'
import { ShoppingCart } from '../../../modules/cart'
import navLinks from './navLinks'
import { SearchPaneDialog } from '../../../modules/search'

export type BottomNavBarProps = AppBarProps

const BottomNavBar = (props: BottomNavBarProps) => {
  const router = useRouter()

  const {
    handleClose: handleSearchDialogClose,
    handleOpen: handleSearchDialogOpen,
    open: searchDialogOpen,
  } = useModal()

  const {
    handleClose: handleShoppingCartClose,
    handleOpen: handleShoppingCartDialogOpen,
    open: openShoppingCartDialog,
  } = useModal()

  const handleChange = (value: string) => {
    if (value === '#ShoppingCart') {
      handleShoppingCartDialogOpen()
    } else router.push(value)
    if (value === '#search') {
      handleSearchDialogOpen()
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
        <SearchPaneDialog
          onClose={handleSearchDialogClose}
          open={searchDialogOpen}
        />
        <ShoppingCartDialog
          open={openShoppingCartDialog}
          onClose={handleShoppingCartClose}
          title="Your basket"
          aria-labelledby="ShoppingCart-dialog-title"
          TransitionComponent={SlideTransition}
          keepMounted
        >
          <ShoppingCart className="Cart" />
        </ShoppingCartDialog>
      </BottomNavBarRoot>
    </HideOnScroll>
  )
}

export { BottomNavBar }
export default BottomNavBar

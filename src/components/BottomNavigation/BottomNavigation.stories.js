import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'

import BottomNavigation from '.'

export default {
  title: 'BottomNavigation',
}

const navLinks = [
  { label: 'Restaurants', value: '/restaurants', icon: <RestoreIcon /> },
  { label: 'Menu', value: '/menu', icon: <FavoriteIcon /> },
  { label: 'Profil', value: '/profile', icon: <AccountCircleOutlinedIcon /> },
]

export const Default = () => <BottomNavigation links={navLinks} value="/menu" />

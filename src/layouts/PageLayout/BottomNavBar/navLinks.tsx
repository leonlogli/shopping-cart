import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Home from '@material-ui/icons/Home'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import Badge from '@material-ui/core/Badge'

const navLinks = [
  { label: 'Home', value: '/', icon: <Home /> },
  { label: 'Search', value: '#search', icon: <SearchIcon /> },
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

export { navLinks }
export default navLinks

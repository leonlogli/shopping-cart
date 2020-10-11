import React from 'react'
import NavBarBrand from '.'

export default {
  title: 'NavBarBrand',
}

export const Default = () => <NavBarBrand />

export const withName = () => <NavBarBrand name="Home" />

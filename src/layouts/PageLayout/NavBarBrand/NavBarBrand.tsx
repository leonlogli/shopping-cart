import React from 'react'

import { NavBarBrandRoot } from './NavBarBrand.style'
import { Link, BoxProps, Logo, LogoProps } from '../../../components'

export type NavBarBrandProps = BoxProps & {
  /**
   * Nav brand name
   * @default Recipoz
   */
  name?: string
  logoProps?: LogoProps
}

const NavBarBrand = (props: NavBarBrandProps) => {
  const { name = 'Shopping Cart', logoProps, ...other } = props

  return (
    <NavBarBrandRoot display="flex" alignItems="center" {...other}>
      <Link underline="none" href="/">
        <Logo
          size={logoProps?.size || '26'}
          fill={logoProps?.fill}
          color={logoProps?.color}
        />
      </Link>
      <Link underline="none" href="/">
        {name}
      </Link>
    </NavBarBrandRoot>
  )
}

export { NavBarBrand }
export default NavBarBrand

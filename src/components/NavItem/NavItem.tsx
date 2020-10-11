import React, { forwardRef } from 'react'

import { NavItemRoot } from './NavItem.style'
import { LinkProps, Link } from '../Link'

export type NavItemProps = LinkProps & {
  /**
   * Indicates whether this nav item is active
   */
  active?: boolean
}

const NavItem = forwardRef<HTMLElement, NavItemProps>((props, ref) => {
  const { active = false, className, id, ...other } = props

  return (
    <NavItemRoot active={active} className={className} id={id} ref={ref as any}>
      <Link underline="none" {...(other as any)} />
    </NavItemRoot>
  )
})

export { NavItem }
export default NavItem

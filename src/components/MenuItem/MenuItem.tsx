import React from 'react'
import { MenuItemProps as MuiMenuItemProps } from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import { BoxProps } from '../Layout'
import { Link, LinkProps } from '../Link'

import { MenuItemRoot } from './MenuItem.style'
import { Text } from '../Typography'

export type MenuItemProps = Omit<MuiMenuItemProps, 'button'> &
  Pick<BoxProps, 'component'> &
  LinkProps & {
    icon?: React.ReactElement
    text: string
  }

/**
 * Mobile side nav menu item
 */
const MenuItem = (props: MenuItemProps) => {
  const { href, as, to, text, icon, component, onClick, ...other } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, 'href'>>((itemProps, ref) => (
        <Link
          href={href}
          as={as}
          ref={ref as any}
          underline="none"
          color="inherit"
          to={to}
          {...itemProps}
        />
      )),
    [href]
  )

  const componentProp: any = { component: href ? renderLink : component }

  return (
    <MenuItemRoot
      button={(!!href || !!onClick) as any}
      component={(href ? renderLink : component) as any}
      onClick={onClick as any}
      {...componentProp}
      {...other}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <Text variant="inherit">{text}</Text>
    </MenuItemRoot>
  )
}

export { MenuItem }
export default MenuItem

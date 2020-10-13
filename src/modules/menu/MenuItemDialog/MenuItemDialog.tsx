import React from 'react'

import { ConfirmDialogProps } from '../../../components'
import CounterDialog from './CounterDialog'
import OptionsDialog from './OptionsDialog'

import { MenuItem } from '../state'
import { CartItem } from '../../cart'

export type MenuItemDialogProps = Pick<
  ConfirmDialogProps,
  'open' | 'onClose'
> & {
  item: MenuItem | CartItem
}

const MenuItemDialog = (props: MenuItemDialogProps) => {
  const { item, onClose, ...other } = props

  if (!item) return null

  const cartItem = 'quantity' in item ? item : undefined
  const { options } = cartItem ? cartItem.menuItem : (item as MenuItem)

  return (
    <>
      {!options && (
        <CounterDialog {...other} item={item as any} onClose={onClose} />
      )}
      {options && (
        <OptionsDialog {...other} item={item as any} onClose={onClose} />
      )}
    </>
  )
}

export { MenuItemDialog }
export default MenuItemDialog

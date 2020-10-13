import React from 'react'
import { useDispatch } from 'react-redux'
import Hidden from '@material-ui/core/Hidden'

import {
  Text,
  SlideTransition,
  ZoomTransition,
  ResponsiveDialogProps,
  H6,
  Box,
} from '../../../components'
import MenuItemOptionsForm from '../MenuItemOptionsForm'

import {
  MenuItemDialogRoot,
  ContentBox,
  ImageContainer,
} from './MenuItemDialog.style'

import { CartItem, addCartItem, updateCartItem } from '../../cart'
import { MenuItem, MenuOptionGroup } from '../state'
import { toUSD } from '../../../utils'

export type OptionsDialogProps = Pick<
  ResponsiveDialogProps,
  'open' | 'onClose'
> & {
  item: MenuItem | CartItem
}

const OptionsDialog = (props: OptionsDialogProps) => {
  const { item, onClose, ...other } = props

  const cartItem = 'quantity' in item ? item : undefined
  const menuItem = cartItem ? cartItem.menuItem : (item as MenuItem)
  const { image, name, price, description, options } = menuItem

  const dispatch = useDispatch()

  const handleOptionsSubmit = (data: number[]) => {
    if (cartItem) {
      dispatch(updateCartItem({ id: cartItem.id, optionIds: data }))
    } else {
      dispatch(addCartItem({ menuItem, optionIds: data }))
    }

    if (onClose) onClose()
  }

  return (
    <MenuItemDialogRoot
      {...other}
      title={`Customize your ${name}`}
      okText="Add"
      cancelText="Cancel"
      okButtonProps={{ type: 'submit', form: 'menuitem-options-form' }}
      onClose={onClose}
      fullscreenTransition={SlideTransition}
      windowedTransition={ZoomTransition}
    >
      <ContentBox>
        {image && <ImageContainer {...({ image } as any)} />}
        <Box marginTop={2}>
          <Hidden mdUp>
            <H6>{name}</H6>
          </Hidden>
          {description && <Text>{description}</Text>}
          <Text className="price" color="textSecondary">
            {toUSD(price)}
          </Text>
        </Box>
        {other.open && (
          <MenuItemOptionsForm
            id="menuitem-options-form"
            options={options as MenuOptionGroup[]}
            onSubmit={handleOptionsSubmit}
            selectedOptionIds={cartItem?.optionIds}
          />
        )}
      </ContentBox>
    </MenuItemDialogRoot>
  )
}

export { OptionsDialog }
export default OptionsDialog

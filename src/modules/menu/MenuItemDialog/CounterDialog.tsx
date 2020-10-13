import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline'
import IconButton from '@material-ui/core/IconButton'

import {
  CountButtonBox,
  InnerBox,
  MenuItemDialogRoot,
  ContentBox,
  ImageContainer,
} from './MenuItemDialog.style'
import {
  ConfirmDialogProps,
  SlideTransition,
  ZoomTransition,
  H6,
  Text,
} from '../../../components'

import { addCartItem } from '../../cart'
import { toUSD } from '../../../utils'
import { MenuItem } from '../state'

export type CounterDialogProps = Pick<
  ConfirmDialogProps,
  'open' | 'onClose'
> & {
  item: Omit<MenuItem, 'options'>
}

const CounterDialog = (props: CounterDialogProps) => {
  const { item: menuItem, onClose, ...other } = props
  const { image, name, price, description } = menuItem

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const handleDialogClose = () => {
    setQuantity(1)
    if (onClose) onClose()
  }

  const addToShoppingCart = () => {
    dispatch(addCartItem({ menuItem, quantity }))
    handleDialogClose()
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <MenuItemDialogRoot
      {...other}
      title={name}
      okText="Ajouter"
      cancelText="Annuler"
      onOk={addToShoppingCart}
      onClose={handleDialogClose}
      fullscreenTransition={SlideTransition}
      windowedTransition={ZoomTransition}
      keepMounted
    >
      <ContentBox>
        {image && <ImageContainer {...({ image } as any)} />}
        {description && <Text>{description}</Text>}
        <InnerBox>
          <CountButtonBox>
            <IconButton color="primary" aria-label="remove">
              <RemoveIcon onClick={handleDecrement} />
            </IconButton>
            <H6>{quantity}</H6>
            <IconButton color="primary" aria-label="add">
              <AddIcon onClick={handleIncrement} />
            </IconButton>
          </CountButtonBox>
          <Text className="price">{toUSD(quantity * price)}</Text>
        </InnerBox>
      </ContentBox>
    </MenuItemDialogRoot>
  )
}

export { CounterDialog }
export default CounterDialog

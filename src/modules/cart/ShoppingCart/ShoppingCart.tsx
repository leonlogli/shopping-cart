import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { PaperProps } from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import { Text } from '../../../components'
import ShoppingCartItem from '../ShoppingCartItem'
import { MenuItemDialog } from '../../menu'

import {
  Title,
  TotalCountBox,
  ShoppingCartRoot,
  OrderButton,
} from './ShoppingCart.style'

import { toUSD } from '../../../utils'
import { useModal } from '../../../hooks'

import {
  decreaseCartItem,
  getCartItems,
  getCartTotalPrice,
  CartItem,
  increaseCartItem,
} from '../state'
import CartAlert from './CartAlert'

export type ShoppingCartProps = PaperProps & {
  onOrder?: () => void
}

const ShoppingCart = ({ onOrder, ...props }: ShoppingCartProps) => {
  const { handleClose, open: dialogOpen, handleOpen } = useModal()

  const [itemToUpdate, setItemToUpdate] = useState<CartItem>()
  const [open, setOpen] = useState(false)

  const cartItems = useSelector(getCartItems)
  const totalPrice = useSelector(getCartTotalPrice)
  const dispatch = useDispatch()

  const handleCheckout = () => {
    if (onOrder) onOrder()
    setOpen(true)
  }

  const handleAlertClose = () => {
    setOpen(false)
  }

  const handleItemToUpdate = (value: CartItem) => () => {
    setItemToUpdate(value)
    handleOpen()
  }

  const handleIncrement = (id: number) => () => {
    dispatch(increaseCartItem({ id }))
  }

  const handleDecrement = (id: number) => () => {
    dispatch(decreaseCartItem({ id }))
  }

  return (
    <ShoppingCartRoot {...props}>
      <Title className="Title">Your basket</Title>
      {cartItems.length === 0 && (
        <>
          <ShoppingCartIcon className="ShoppingCartIcon" />
          <Text className="EmptyText" color="textSecondary">
            Your basket is empty
          </Text>
        </>
      )}
      {cartItems.length > 0 && (
        <>
          {cartItems.map((item) => (
            <Fragment key={item.id}>
              <ShoppingCartItem
                quantity={item.quantity}
                price={item.subTotalPrice}
                title={item.menuItem.name}
                options={item.selectedOptions}
                resto={item.resto}
                onIncrement={handleIncrement(item.id)}
                onDecrement={handleDecrement(item.id)}
                onUpdate={handleItemToUpdate(item)}
              />
              <Divider />
            </Fragment>
          ))}
          <TotalCountBox>
            <Text>Total:</Text>
            <Text color="primary">{toUSD(totalPrice)}</Text>
          </TotalCountBox>
          <OrderButton
            variant="contained"
            color="primary"
            onClick={handleCheckout}
          >
            Place order
          </OrderButton>
        </>
      )}
      <MenuItemDialog
        open={dialogOpen}
        onClose={handleClose}
        item={itemToUpdate as CartItem}
      />
      <CartAlert open={open} onClose={handleAlertClose} />
    </ShoppingCartRoot>
  )
}

export { ShoppingCart }
export default ShoppingCart

import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../..'
import { CartItem } from './cartSlice'
import { restaurantsSelector } from '../../restaurant/state'

const computeCartItemUnitPrice = (cartItem: Omit<CartItem, 'price'>) => {
  let optionsPrice = 0
  const { menuItem, optionIds } = cartItem
  const { options } = menuItem

  if (options) {
    options.forEach((opt) => {
      const optPrice = opt.items
        .filter((option) => optionIds?.includes(option.id) && !!option.price)
        .reduce((a, b) => a + (b?.price || 0), 0)

      optionsPrice += optPrice
    })
  }

  return optionsPrice + menuItem.price
}

const findSelectedOptions = (cartItem: CartItem) => {
  const { menuItem, optionIds } = cartItem
  const { options } = menuItem

  if (!options || !optionIds) {
    return null
  }
  const name: string[] = []

  options.forEach((opt) => {
    const subOptions = opt.items.filter((option) =>
      optionIds?.includes(option.id)
    )

    name.push(...subOptions.map((o) => o.name))
  })

  return name
}

const cartItemsSelector = (state: RootState) => state.cart.items

const getCartTotalPrice = createSelector(cartItemsSelector, (items) =>
  items.reduce((a, v) => a + v.price * v.quantity, 0)
)

const getCartItemsCount = createSelector(cartItemsSelector, (items) =>
  items.reduce((a, v) => a + v.quantity, 0)
)

const getCartItems = createSelector(
  cartItemsSelector,
  restaurantsSelector,
  (items, restoState) => {
    return items.map((item) => ({
      ...item,
      subTotalPrice: item.quantity * item.price,
      selectedOptions: findSelectedOptions(item),
      resto: restoState.restaurants.find(
        (r) => Number(r.id) === Number(item.menuItem.restaurantId)
      )?.name as string,
    }))
  }
)

export {
  getCartItemsCount,
  getCartTotalPrice,
  getCartItems,
  computeCartItemUnitPrice,
  findSelectedOptions,
}

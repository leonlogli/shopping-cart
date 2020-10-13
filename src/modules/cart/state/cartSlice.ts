import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MenuItem } from '../../menu/state'
import { computeCartItemUnitPrice } from './cartSelector'

export type CartItem = {
  id: number
  quantity: number
  price: number
  menuItem: MenuItem
  optionIds?: number[]
}

type AddCartItemPayload = Omit<CartItem, 'quantity' | 'id' | 'price'> & {
  quantity?: number
}

type UpdateCartItemPayload = {
  id: number
  optionIds: number[]
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, { payload }: PayloadAction<AddCartItemPayload>) {
      const cartItem = state.items.find(
        (item) => item.menuItem.id === payload.menuItem.id
      )

      if (cartItem && !payload.optionIds) {
        cartItem.quantity += payload.quantity || 1
      } else {
        const newItem = {
          ...payload,
          quantity: payload.quantity || 1,
          id: payload.menuItem.id + Date.now(),
        }

        state.items.push({
          ...newItem,
          price: computeCartItemUnitPrice(newItem),
        })
      }
    },
    updateCartItem(state, { payload }: PayloadAction<UpdateCartItemPayload>) {
      const cartItem = state.items.find((item) => item.id === payload.id)

      if (cartItem) {
        cartItem.optionIds = payload.optionIds
      }
    },
    increaseCartItem(state, { payload }: PayloadAction<{ id: number }>) {
      const cartItem = state.items.find((item) => item.id === payload.id)

      if (cartItem) {
        cartItem.quantity += 1
      }
    },
    decreaseCartItem(state, { payload }: PayloadAction<{ id: number }>) {
      const cartItem = state.items.find((item) => item.id === payload.id)

      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1
      } else {
        state.items = state.items.filter((item) => item.id !== payload.id)
      }
    },
    removeCartItem(state, { payload }: PayloadAction<{ id: number }>) {
      const cartItem = state.items.find((item) => item.id === payload.id)

      if (cartItem) {
        state.items = state.items.filter((item) => item.id !== payload.id)
      }
    },
  },
})

export const {
  addCartItem,
  increaseCartItem,
  decreaseCartItem,
  removeCartItem,
  updateCartItem,
} = cart.actions

export default cart.reducer

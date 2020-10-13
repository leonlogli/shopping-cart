import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import menuService from './menuService'

export type OptionItem = {
  id: number
  name: string
  price?: number
}

export type MenuOptionGroup = {
  id: number
  name: string
  description?: string
  items: OptionItem[]
  min?: number
  max?: number
}

export type MenuItem = {
  id: number
  name: string
  image?: string
  price: number
  description?: string
  options?: MenuOptionGroup[]
  duration?: number
  // properties added by the frontend
  /** @client */
  restaurantId: number
}

export type MenuGroup = {
  id: number
  name: string
  items: MenuItem[]
}

interface MenuState {
  error?: Error | null
  loading?: boolean
  menusByRestaurant: Record<number, MenuGroup[] | undefined>
}

const initialState: MenuState = {
  menusByRestaurant: {},
}

function startLoading(state: MenuState) {
  state.loading = true
}

function loadingFailed(state: MenuState, action: any) {
  state.loading = false
  state.error = action.error
}

export const getRestaurantMenus = createAsyncThunk(
  'menu/getRestaurantMenus',
  menuService.getRestaurantMenus
)

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getRestaurantMenus.pending, startLoading)
    addCase(getRestaurantMenus.rejected, loadingFailed)

    addCase(getRestaurantMenus.fulfilled, (state, action) => {
      const { menus, restaurantId } = action.payload

      state.menusByRestaurant[restaurantId] = menus
      state.loading = false
      state.error = null
    })
  },
})

export default menu.reducer

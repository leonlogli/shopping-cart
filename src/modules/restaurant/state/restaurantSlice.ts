import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Day } from './restaurantHelpers'
import restaurantService from './restaurantService'

export type Schedule = {
  day: Day
  start: string
  end: string
}

export type RestaurantStatus = {
  isOpen: boolean
  statusText?: string
}

export type Restaurant = {
  id: number
  name: string
  image: string
  category: string
  description: string
  schedule: Schedule[]
  open: boolean

  // Client side properties
  /** @client */
  status: RestaurantStatus
}

interface RestaurantState {
  restaurants: Record<number, Restaurant>
  error?: Error | null
  loading?: boolean
}

const initialState: RestaurantState = {
  restaurants: {},
}

function startLoading(state: RestaurantState) {
  state.loading = true
}

function loadingFailed(state: RestaurantState, action: any) {
  state.loading = false
  state.error = action.error
}

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  restaurantService.getRestaurants
)

export const getRestaurant = createAsyncThunk(
  'restaurant/getRestaurant',
  restaurantService.getRestaurant
)

export const addRestaurant = createAsyncThunk(
  'restaurant/addRestaurant',
  restaurantService.addRestaurant
)

export const updateRestaurant = createAsyncThunk(
  'restaurant/updateRestaurant',
  restaurantService.updateRestaurant
)

export const deleteRestaurant = createAsyncThunk(
  'restaurant/deleteRestaurant',
  restaurantService.deleteRestaurant
)

const restaurant = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getRestaurants.pending, startLoading)
    addCase(getRestaurants.rejected, loadingFailed)

    addCase(getRestaurant.pending, startLoading)
    addCase(getRestaurant.rejected, loadingFailed)

    addCase(addRestaurant.pending, startLoading)
    addCase(addRestaurant.rejected, loadingFailed)

    addCase(updateRestaurant.pending, startLoading)
    addCase(updateRestaurant.rejected, loadingFailed)

    addCase(deleteRestaurant.pending, startLoading)
    addCase(deleteRestaurant.rejected, loadingFailed)

    addCase(getRestaurants.fulfilled, (state, { payload }) => {
      payload.forEach((resto) => {
        state.restaurants[resto.id] = {
          ...state.restaurants[resto.id],
          ...resto,
        }
      })
      state.loading = false
      state.error = null
    })

    addCase(getRestaurant.fulfilled, (state, { payload }) => {
      state.restaurants[payload.id] = payload
      state.loading = false
      state.error = null
    })

    addCase(addRestaurant.fulfilled, (state, { payload }) => {
      state.restaurants[payload.id] = payload
      state.loading = false
      state.error = null
    })

    addCase(updateRestaurant.fulfilled, (state, { payload }) => {
      state.restaurants[payload.id] = payload
      state.loading = false
      state.error = null
    })

    addCase(deleteRestaurant.fulfilled, (state, { payload }) => {
      delete state.restaurants[payload.id]
      state.loading = false
      state.error = null
    })
  },
})

export default restaurant.reducer

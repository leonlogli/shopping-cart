import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../..'
import { getRestaurantStatus } from './restaurantHelpers'
import { Restaurant } from './restaurantSlice'

const restaurantsMapSelector = (state: RootState) =>
  state.restaurant.restaurants

const restaurantStatusSelector = (state: RootState) => {
  const { loading, error } = state.restaurant

  return { loading, error }
}

const restaurantsSelector = createSelector(
  restaurantsMapSelector,
  restaurantStatusSelector,
  (restaurantEntries, status) => {
    const restaurants = Object.keys(restaurantEntries)
      .map((restoKey) => {
        const resto = restaurantEntries[Number(restoKey)]

        if (!resto) return null

        const restoStatus = getRestaurantStatus({
          schedules: resto.schedule,
          open: resto.open,
        })

        return { ...resto, status: restoStatus }
      })
      .filter(Boolean) as Restaurant[]

    return { restaurants, ...status }
  }
)

const restaurantEntriesSelector = createSelector(
  restaurantsSelector,
  (data) => {
    const restaurantsEntries: Record<number, Restaurant> = {}
    const { restaurants, ...status } = data

    restaurants.forEach((resto) => {
      restaurantsEntries[resto.id] = resto
    })

    return { restaurants: restaurantsEntries, ...status }
  }
)

export {
  restaurantsSelector,
  restaurantStatusSelector,
  restaurantEntriesSelector,
}

import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../..'

const menusState = (state: RootState) => state.menu

const menuStatusSelector = (state: RootState) => {
  const { loading, error } = state.menu

  return { loading, error }
}

const menusSelector = createSelector(
  menusState,
  menuStatusSelector,
  (state, status) => {
    const { menusByRestaurant } = state

    return { menusByRestaurant, ...status }
  }
)

export { menusSelector, menuStatusSelector }

import { combineReducers } from '@reduxjs/toolkit'

import cartReducer from './cart'
import restaurantReducer from './restaurant'
import searchReducer from './search'
import menuReducer from './menu'

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  search: searchReducer,
  menu: menuReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

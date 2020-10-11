/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'

import rootReducer, { RootState } from './modules'

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const isProdEnv = process.env.NODE_ENV === 'production'

const middleware = !isProdEnv ? [require('redux-logger').default] : []

const store = configureStore({
  reducer: persistedReducer,
  devTools: !isProdEnv,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware)
  },
})

const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export { persistor }
export default store

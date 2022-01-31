import { configureStore, combineReducers } from '@reduxjs/toolkit'

import items from '../redux/phonebook/slice-items'
import filter from '../redux/phonebook/slice-filter'
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
import storage from 'redux-persist/lib/storage'
import authUser from './auth/auth-slice'

const persistConfig = {
  key: 'authUser',
  storage,
  whitelist: ['token'],
}

const persistedAuthUserReducer = persistReducer(persistConfig, authUser)

const contacts = combineReducers({
  items,
  filter,
})

export const store = configureStore({
  reducer: {
    contacts,
    authUser: persistedAuthUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

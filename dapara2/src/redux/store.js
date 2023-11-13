import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
  devTools: process.env.MODE_ENV !== 'production',
})

import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart'
import productSearchReducer from './product-search'
import { productApi } from '@/services/products'

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  cartReducer
)

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    productSearch: productSearchReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(productApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

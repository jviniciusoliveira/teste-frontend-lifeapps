import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/setup'

interface Product {
  id: string
  name: string
  category: string
  price: number
  discount_percentage: number
  promotional_price: number
  image: string
  description: string
}

type ProductCart = Product & {
  quantity: number
  amount: number
}

type CartState = {
  products: ProductCart[]
}

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === payload.id
      )

      if (productIndex < 0) {
        state.products = [
          ...state.products,
          { ...payload, quantity: 1, amount: payload.price },
        ]
      } else {
        const currentProduct = state.products[productIndex]
        const updatedProduct = {
          ...currentProduct,
          quantity: currentProduct.quantity + 1,
        }
        state.products[productIndex] = updatedProduct
      }
    },
    remove: (state, { payload }: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      )
    },
    clear: (state) => {
      state.products = []
    },
  },
})

export const actionCart = cartSlice.actions
export const selectCart = (state: RootState) => state.cart.products

export default cartSlice.reducer

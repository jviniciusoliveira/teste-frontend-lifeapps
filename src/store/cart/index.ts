import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/setup'

export interface Product {
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

type ChangeQuantity = {
  productId: string
  quantity: number
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
      const productInCart = state.products.find(
        (product) => product.id === payload.id
      )

      if (!productInCart) {
        state.products = [
          ...state.products,
          { ...payload, quantity: 1, amount: payload.price },
        ]
      }
    },
    delete: (state, { payload }: PayloadAction<{ productId: string }>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.productId
      )
    },
    changeQuantity: (state, { payload }: PayloadAction<ChangeQuantity>) => {
      state.products = state.products.map((product) =>
        product.id !== payload.productId
          ? product
          : {
              ...product,
              quantity: payload.quantity,
              amount: payload.quantity * product.price,
            }
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

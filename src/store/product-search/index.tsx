import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/setup'

type SearchParams = { _page: number } | { name: string } | { category: string }

type ProductSearchState = {
  searchParams: SearchParams
}

const initialState: ProductSearchState = {
  searchParams: { _page: 1 },
}

export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {
    setSearchParams: (state, { payload }: PayloadAction<SearchParams>) => {
      state.searchParams = payload
    },
  },
})

export const actionProductSearch = productSearchSlice.actions
export const selectProductSearch = (state: RootState) =>
  state.productSearch.searchParams

export default productSearchSlice.reducer

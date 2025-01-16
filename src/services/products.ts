import type { Product } from '@/store'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type GetProductsResponse = {
  data: Product[]
  pages: number
  next: number
  prev: number
}

type GetProductsTrasformResult = {
  products: Product[]
  pages: {
    current: number
    total: number
  }
}

function transformGetProductsResponse(
  response: GetProductsResponse
): GetProductsTrasformResult {
  let products = response as unknown as Product[]
  let pages = {
    current: 1,
    total: 1,
  }

  if (response.data) {
    products = response.data
    pages = {
      current: response.next ? response.next - 1 : response.prev + 1,
      total: response.pages,
    }
  }

  return {
    products,
    pages,
  }
}

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002/',
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ url: 'products', params }),
      transformResponse: transformGetProductsResponse,
    }),
    getProductById: build.query<Product, string>({
      query: (productId) => ({ url: `products/${productId}` }),
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi

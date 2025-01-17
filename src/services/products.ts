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
  totalPages: number
}

function transformGetProductsResponse(
  response: GetProductsResponse
): GetProductsTrasformResult {
  let products = response as unknown as Product[]
  let totalPages = 1

  if (response.data) {
    products = response.data
    totalPages = response.pages
  }

  return {
    products,
    totalPages,
  }
}

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: (searchParams) => ({ url: `products/?${searchParams}` }),
      transformResponse: transformGetProductsResponse,
    }),
    getProductById: build.query<Product, string>({
      query: (productId) => ({ url: `products/${productId}` }),
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi

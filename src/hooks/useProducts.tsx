import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionProductSearch, selectProductSearch } from '@/store'
import { useGetProductsQuery } from '@/services/products'

export function useProducts() {
  const dispatch = useDispatch()
  const searchParams = useSelector(selectProductSearch)

  const { data: { products = [], pages } = {} } =
    useGetProductsQuery(searchParams)

  const getByCategory = useCallback((category: string) => {
    dispatch(
      actionProductSearch.setSearchParams({
        category,
      })
    )
  }, [])

  const getByPage = useCallback((pageNumber: number) => {
    dispatch(
      actionProductSearch.setSearchParams({
        _page: pageNumber,
      })
    )
  }, [])

  const getByName = useCallback((inputText: string) => {
    dispatch(
      actionProductSearch.setSearchParams({
        name: inputText,
      })
    )
  }, [])

  return {
    products,
    pages,
    getByCategory,
    getByPage,
    getByName,
  }
}

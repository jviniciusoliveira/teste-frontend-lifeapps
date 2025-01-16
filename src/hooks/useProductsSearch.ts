import { useCallback } from 'react'
import { createSearchParams, useNavigate } from 'react-router'

export function useProductsSearch() {
  const navigate = useNavigate()

  const searchByCategory = useCallback((category: string) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        category,
      }).toString(),
    })
  }, [])

  const searchByPage = useCallback((pageNumber: number) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        _page: String(pageNumber),
      }).toString(),
    })
  }, [])

  const searchByName = useCallback((inputText: string) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        name: inputText,
      }).toString(),
    })
  }, [])

  return {
    searchByPage,
    searchByName,
    searchByCategory,
  }
}

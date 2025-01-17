import { useCallback } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router'

export function useProductsSearch() {
  const [searchParams] = useSearchParams()
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
    currentParams: searchParams,
  }
}

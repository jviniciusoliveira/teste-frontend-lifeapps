import { useMemo } from 'react'
import { useSearchParams, createSearchParams } from 'react-router'

import { useGetProductsQuery } from '@/services/products'

const PAGE_DEFAULT = 1
const PER_PAGE_DEFAULT = 10

export function useProductsList() {
  const [searchParams] = useSearchParams()

  const _page = searchParams.get('_page')
  const name = searchParams.get('name')
  const category = searchParams.get('category')

  const query = useMemo(() => {
    if (_page || searchParams.size === 0) {
      return createSearchParams({
        _page: _page || String(PAGE_DEFAULT),
        _per_page: String(PER_PAGE_DEFAULT),
      }).toString()
    }
    if (name) {
      return createSearchParams({
        name,
      }).toString()
    }
    if (category) {
      return createSearchParams({
        category,
      }).toString()
    }
  }, [_page, name, category])

  const { data: { products = [], totalPages } = {}, isLoading } =
    useGetProductsQuery(query)

  return {
    products,
    totalPages,
    isLoading,
    currentPage: _page ? Number(_page) : 1,
  }
}

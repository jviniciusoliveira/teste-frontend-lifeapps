import styles from './styles.module.css'

import { CardProduct } from '@/components/card-product'
import { Categories } from '@/components/categories'
import { Pagination } from '@/components/pagination'
import { useProductsList } from '@/hooks/useProductsList'
import { useProductsSearch } from '@/hooks/useProductsSearch'

export function Home() {
  const { searchByPage } = useProductsSearch()
  const { products, totalPages, currentPage } = useProductsList()

  return (
    <>
      <Categories />

      <div className={styles.productListContainer}>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={searchByPage}
        />
      )}
    </>
  )
}

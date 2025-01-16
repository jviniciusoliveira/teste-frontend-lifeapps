import styles from './styles.module.css'

import { Pagination } from '@/components/pagination'
import { useProductsList } from '@/hooks/useProductsList'
import { useProductsSearch } from '@/hooks/useProductsSearch'
import { CardProduct } from '../card-product'

export function Products() {
  const { searchByPage } = useProductsSearch()
  const { products, totalPages, currentPage } = useProductsList()

  return (
    <>
      <div className={styles.container}>
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

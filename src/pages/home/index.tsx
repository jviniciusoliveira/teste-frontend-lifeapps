import styles from './styles.module.css'

import { CardProduct } from '@/components/card-product'
import { Categories } from '@/components/categories'
import { Pagination } from '@/components/pagination'
import { useProductsList } from '@/hooks/use-products-list'
import { useProductsSearch } from '@/hooks/use-products-search'

export function Home() {
  const { searchByPage } = useProductsSearch()
  const { products, totalPages, currentPage, isLoading } = useProductsList()

  return (
    <>
      <Categories />

      <div className={styles.productListContainer}>
        {isLoading && 'Aguarde, carregando produtos...'}
        {!products.length && !isLoading && 'Nenhum produto encontrado.'}
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

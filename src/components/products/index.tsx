import styles from './styles.module.css'

import { Pagination } from '@/components/pagination'
import { useProductsList } from '@/hooks/useProductsList'
import { useProductsSearch } from '@/hooks/useProductsSearch'
import { Card } from '@/components/ui/card'

export function Products() {
  const { searchByPage } = useProductsSearch()
  const { products, totalPages, currentPage } = useProductsList()

  return (
    <>
      <div className={styles.container}>
        {products.map((product) => (
          <Card to={`/product/${product.id}`}>
            <Card.Image>
              {Boolean(product.discount_percentage) && (
                <span className={styles.productDiscount}>
                  -{product.discount_percentage}%
                </span>
              )}
              <img src={product.image} alt={product.description} />
            </Card.Image>
            <Card.Content>
              <h3 className={styles.productName}>{product.name}</h3>
              <h4 className={styles.productDescription}>
                {product.description}
              </h4>
              <div className={styles.productPriceContainer}>
                {Boolean(product.promotional_price) && (
                  <strong className={styles.productPrice}>
                    R$ {product.promotional_price},00
                  </strong>
                )}
                <strong
                  className={`${styles.productPrice} ${product.promotional_price ? styles.productWithPromotionalPrice : ''}`}
                >
                  R$ {product.price},00
                </strong>
              </div>
            </Card.Content>
          </Card>
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

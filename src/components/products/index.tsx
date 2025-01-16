import { Link } from 'react-router'
import styles from './styles.module.css'

import { Pagination } from '@/components/pagination'
import { useProducts } from '@/hooks/useProducts'

export function Products() {
  const { products, pages, getByPage } = useProducts()

  return (
    <>
      <div className={styles.container}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div>
              <span className={styles.productDiscount}>
                {product.discount_percentage}
              </span>
              <img className={styles.productImage} src={product.image} />
            </div>
            <h3 className={styles.productName}>{product.name}</h3>
            <h4 className={styles.productDescription}>{product.description}</h4>
            <div>
              <strong
                className={`${styles.productPrice} ${product.promotional_price ? styles.productWithPromotionalPrice : ''}`}
              >
                R$ {product.price},00
              </strong>
              {Boolean(product.promotional_price) && (
                <strong className={styles.productPrice}>
                  R$ {product.promotional_price},00
                </strong>
              )}
            </div>
          </Link>
        ))}
      </div>

      {pages?.total > 1 && (
        <Pagination
          currentPage={pages.current}
          totalPages={pages.total}
          onPageChange={(page) => getByPage(page)}
        />
      )}
    </>
  )
}

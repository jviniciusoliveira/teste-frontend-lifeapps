import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import styles from './styles.module.css'

import { Pagination } from '@/components/pagination'
import { httpGet } from '@/services'

interface Product {
  id: string
  name: string
  category: string
  price: number
  discount_percentage: number
  promotional_price: number
  image: string
  description: string
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = useRef(0)

  useEffect(() => {
    async function loadProducts() {
      const { data, pages } = await httpGet({
        endpoint: 'products',
        params: {
          _page: currentPage,
        },
      })
      totalPages.current = pages
      setProducts(data)
    }

    loadProducts()
  }, [currentPage])

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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages.current}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}

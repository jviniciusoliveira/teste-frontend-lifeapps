import { useEffect, useState } from 'react'

import styles from './styles.module.css'

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

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch('http://localhost:3002/products?_page=1')
      const { data } = await response.json()
      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <>
      <div className={styles.container}>
        {products.map((product) => (
          <div>
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
          </div>
        ))}
      </div>
    </>
  )
}

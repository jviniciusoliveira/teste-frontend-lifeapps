import { useNavigate, useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'

import { actionCart } from '@/store/product-cart'
import type { Product } from '@/store/product-cart'
import { useGetProductByIdQuery } from '@/services/products'

export function Product() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data: product } = useGetProductByIdQuery(id)

  function handleAddToCart() {
    dispatch(actionCart.add(product))
    navigate('/cart')
  }

  if (!product) return null

  return (
    <div className={styles.productContainer}>
      <img className={styles.productImage} src={product.image} />
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>

        <span className={styles.productPrice}>R$ {product.price},00</span>

        <div className={styles.productActions}>
          <button onClick={handleAddToCart} className={styles.productActionAdd}>
            Adicionar à sacola
          </button>
        </div>
      </div>
    </div>
  )
}

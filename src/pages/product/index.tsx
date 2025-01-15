import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'

import { httpGet } from '@/services'
import { actionCart } from '@/store/cart'
import { type Product } from '@/store/cart'

export function Product() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    async function loadProduct() {
      const response = await httpGet({ endpoint: `products/${id}` })
      setProduct(response)
    }
    loadProduct()
  }, [])

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

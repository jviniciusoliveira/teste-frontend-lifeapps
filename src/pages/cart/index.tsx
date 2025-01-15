import { useSelector } from 'react-redux'
import styles from './styles.module.css'

import { selectCart } from '@/store/cart'

export function Cart() {
  const products = useSelector(selectCart)

  if (!products.length) return null

  return (
    <div className={styles.cartContainer}>
      <h3>Carrinho</h3>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id} className={styles.cartItemContainer}>
              <img className={styles.cartItemImage} src={product.image} />
              <div className={styles.cartItemInfo}>
                <strong className={styles.cartItemInfoName}>
                  {product.name}
                </strong>
                <p className={styles.cartItemInfoDescription}>
                  {product.description}
                </p>
              </div>

              <div className={styles.cartItemQuantityContainer}>
                <button className={styles.cartItemQuantityButton}>-</button>
                <span className={styles.cartItemQuantity}>
                  {product.quantity}
                </span>
                <button className={styles.cartItemQuantityButton}>+</button>
              </div>
              <div className={styles.cartItemPrice}>R$ {product.price},00</div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className={styles.cartSummaryTitle}>Resumo da compra</h4>
        <div className={styles.cartSummary}>
          <div>
            <p>Total de Produtos: 3</p>
            <p>Frete: Grátis</p>
            <p>Total: R$ 900,00</p>
          </div>
          <div className={styles.cartSummaryActions}>
            <button>Finalizar a compra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

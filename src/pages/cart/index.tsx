import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

import { actionCart, selectCart } from '@/store/product-cart'

export function Cart() {
  const dispatch = useDispatch()
  const products = useSelector(selectCart)

  function handleChangeQuantity(productId: string, quantity: number) {
    dispatch(actionCart.changeQuantity({ productId, quantity }))
  }

  function handleDeleteProduct(productId: string) {
    dispatch(actionCart.delete({ productId }))
  }

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
                <select
                  name="productQuantity"
                  onChange={(event) =>
                    handleChangeQuantity(product.id, Number(event.target.value))
                  }
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(
                    (quantity) => (
                      <option
                        value={quantity}
                        selected={quantity === product.quantity}
                      >
                        {quantity}
                      </option>
                    )
                  )}
                </select>
                <button
                  className={styles.cartItemActionDelete}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Excluir
                </button>
              </div>

              <div className={styles.cartItemPrice}>R$ {product.amount},00</div>
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

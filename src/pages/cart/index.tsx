import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'

import {
  actionCart,
  selectCart,
  selectQuantityInCart,
  selectTotalPrice,
} from '@/store/cart'
import { Button } from '@/components/ui/button'

import { QuantityField } from './components/quantity-field'
import { CartSummary } from './components/cart-summary'
import { ProductRow } from './components/product-row'
import { ProductInfo } from './components/product-info'

export function Cart() {
  const dispatch = useDispatch()

  const products = useSelector(selectCart)
  const quantity = useSelector(selectQuantityInCart)
  const totalPrice = useSelector(selectTotalPrice)

  function handleChangeQuantity(productId: string, quantity: number) {
    dispatch(actionCart.changeQuantity({ productId, quantity }))
  }

  function handleDeleteProduct(productId: string) {
    dispatch(actionCart.delete({ productId }))
  }

  function handleClearCart() {
    dispatch(actionCart.clear())
  }

  // TODO: Adicionar com componente informando "Nenhum produto na sacola"
  if (!products.length) return null

  return (
    <div className={styles.cartContainer}>
      <h3>Carrinho</h3>
      <ul data-testid="cart-product-list">
        {products.map((product) => (
          <ProductRow key={product.id}>
            <ProductInfo product={product} />
            <div className={styles.cartItemQuantity}>
              <QuantityField
                value={product.quantity}
                onChange={(quantity) =>
                  handleChangeQuantity(product.id, quantity)
                }
              />
              <Button
                variant="text"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Excluir
              </Button>
            </div>
            <div className={styles.cartItemPrice}>R$ {product.amount},00</div>
          </ProductRow>
        ))}
      </ul>
      <CartSummary
        quantityProducts={quantity}
        totalPrice={totalPrice}
        onClearCart={handleClearCart}
      />
    </div>
  )
}

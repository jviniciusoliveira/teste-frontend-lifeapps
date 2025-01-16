import styles from './styles.module.css'

import { Button } from '@/components/ui/button'

type CartSummaryProps = {
  quantityProducts: number
  totalPrice: number
  onClearCart: VoidFunction
}

export function CartSummary({
  quantityProducts,
  totalPrice,
  onClearCart,
}: CartSummaryProps) {
  return (
    <div>
      <h4 className={styles.cartSummaryTitle}>Resumo da compra</h4>
      <div className={styles.cartSummaryContainer}>
        <div className={styles.cartSummaryValues}>
          <p>
            Total de produtos: <span>{quantityProducts}</span>
          </p>
          <p>
            Valor do frete: <span>Grátis</span>
          </p>
          <p>
            Valor total: <span>R$ {totalPrice},00</span>
          </p>
        </div>
        <div className={styles.cartSummaryActionsContainer}>
          <Button>Finalizar a compra</Button>
          <Button
            variant="text"
            className={styles.cartSummaryActionsButtonText}
            to="/"
          >
            Comprar mais produtos
          </Button>
          <Button
            variant="text"
            className={styles.cartSummaryActionsButtonText}
            onClick={onClearCart}
          >
            Excluir produtos
          </Button>
        </div>
      </div>
    </div>
  )
}

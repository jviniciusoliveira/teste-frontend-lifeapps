import styles from './styles.module.css'

import { Button } from '@/components/ui/button'

export function CartEmpty() {
  return (
    <div className={styles.cartEmpty}>
      <p>Nenhum produto na sacola.</p>
      <Button variant="text" to="/">
        Buscar produtos
      </Button>
    </div>
  )
}

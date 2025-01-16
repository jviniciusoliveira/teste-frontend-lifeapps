import styles from './styles.module.css'

import { Product } from '@/store'

type ProductInfoProps = {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <>
      <img className={styles.productInfoImage} src={product.image} />

      <div className={styles.productInfo}>
        <strong className={styles.productInfoName}>{product.name}</strong>
        <p className={styles.productInfoDescription}>{product.description}</p>
      </div>
    </>
  )
}

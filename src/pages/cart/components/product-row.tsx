import * as React from 'react'

import styles from './styles.module.css'

type ProductRowProps = {
  children: React.ReactNode
}

export function ProductRow({ children }: ProductRowProps) {
  return <li className={styles.productRowContainer}>{children}</li>
}

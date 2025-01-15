import styles from './styles.module.css'

export function Categories() {
  return (
    <nav className={styles.container}>
      <button
        className={`${styles.categoryOption} ${styles.categoryOptionActive}`}
      >
        Todos os produtos
      </button>
      <button className={styles.categoryOption}>Camisetas</button>
      <button className={styles.categoryOption}>Calças</button>
      <button className={styles.categoryOption}>Tênis</button>
    </nav>
  )
}

import styles from './styles.module.css'
import { useProducts } from '@/hooks/useProducts'

export function Categories() {
  const { getByCategory, getByPage } = useProducts()

  function handleGetByCategory(category: string) {
    return function () {
      getByCategory(category)
    }
  }

  return (
    <nav className={styles.container}>
      <button
        onClick={() => getByPage(1)}
        className={`${styles.categoryOption} ${styles.categoryOptionActive}`}
      >
        Todos os produtos
      </button>
      <button
        onClick={handleGetByCategory('Camisetas')}
        className={styles.categoryOption}
      >
        Camisetas
      </button>
      <button
        onClick={handleGetByCategory('Calças')}
        className={styles.categoryOption}
      >
        Calças
      </button>
      <button
        onClick={handleGetByCategory('Tênis')}
        className={styles.categoryOption}
      >
        Tênis
      </button>
    </nav>
  )
}

import styles from './styles.module.css'

import { useProductsSearch } from '@/hooks/useProductsSearch'

export function Categories() {
  const { searchByCategory, searchByPage } = useProductsSearch()

  function handleGetByCategory(category: string) {
    return function () {
      searchByCategory(category)
    }
  }

  return (
    <nav className={styles.container}>
      <button
        onClick={() => searchByPage(1)}
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

import styles from './styles.module.css'

import { Button } from '@/components/ui/button'
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
      <Button
        onClick={() => searchByPage(1)}
        className={`${styles.categoryOption} ${styles.categoryOptionActive}`}
      >
        Todos os produtos
      </Button>
      <Button
        onClick={handleGetByCategory('Camisetas')}
        className={styles.categoryOption}
      >
        Camisetas
      </Button>
      <Button
        onClick={handleGetByCategory('Calças')}
        className={styles.categoryOption}
      >
        Calças
      </Button>
      <Button
        onClick={handleGetByCategory('Tênis')}
        className={styles.categoryOption}
      >
        Tênis
      </Button>
    </nav>
  )
}

import styles from './styles.module.css'

import { Button } from '@/components/ui/button'
import { useProductsSearch } from '@/hooks/use-products-search'

const categories = ['Camisetas', 'Calças', 'Tênis']

export function Categories() {
  const { searchByCategory, currentParams } = useProductsSearch()
  const categoryParam = currentParams.get('category')

  function handleGetByCategory(category: string) {
    return function () {
      searchByCategory(category)
    }
  }

  return (
    <nav className={styles.categoriesContainer} data-testid="categories">
      <Button
        to="/"
        className={styles.categoryOption}
        disabled={!categoryParam && !currentParams.get('name')}
        data-active={!categoryParam && !currentParams.get('name')}
      >
        Todos os produtos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={handleGetByCategory(category)}
          className={styles.categoryOption}
          disabled={category === categoryParam}
          data-active={category === categoryParam}
        >
          {category}
        </Button>
      ))}
    </nav>
  )
}

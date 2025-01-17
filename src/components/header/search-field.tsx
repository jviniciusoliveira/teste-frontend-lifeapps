import { forwardRef } from 'react'

import styles from './styles.module.css'

import SearchIcon from '@/assets/icons/search.svg'
import { Button } from '@/components/ui/button'

type SearchFieldRootProps = {
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void
}

export const SearchField = forwardRef<HTMLFormElement, SearchFieldRootProps>(
  ({ onSearch }, ref) => {
    return (
      <form ref={ref} onSubmit={onSearch} className={styles.searchInput}>
        <input type="text" name="input-search" placeholder="Buscar produtos" />
        <Button
          variant="icon"
          type="submit"
          title="Pesquisar pelo nome do produto"
        >
          <SearchIcon />
        </Button>
      </form>
    )
  }
)

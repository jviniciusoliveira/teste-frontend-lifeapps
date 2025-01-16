import { useRef } from 'react'
import { Link } from 'react-router'
import styles from './styles.module.css'

import CartIcon from '@/assets/icons/cart.svg'
import BrandIcon from '@/assets/icons/brand.svg'
import FavoriteIcon from '@/assets/icons/favorite.svg'
import SearchIcon from '@/assets/icons/search.svg'
import UserIcon from '@/assets/icons/user.svg'
import { useProductsSearch } from '@/hooks/useProductsSearch'
import { Button } from '@/components/button'

export function Header() {
  const { searchByName } = useProductsSearch()
  const formRef = useRef(null) as React.MutableRefObject<HTMLFormElement>

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const inputText = formData.get('input-search') as string

    if (!inputText?.trim()) return
    searchByName(inputText)
    formRef.current.reset()
  }

  return (
    <header className={styles.container}>
      <Link to="/" className={styles.brandContainer} title="Tela inicial">
        <BrandIcon className={styles.brand} />
        <h1 className={styles.title}>E-Commerce</h1>
      </Link>
      <form
        ref={formRef}
        onSubmit={(e) => handleSearch(e)}
        className={styles.searchInput}
      >
        <input type="text" name="input-search" placeholder="Buscar produtos" />
        <Button
          variant="icon"
          type="submit"
          title="Pesquisar pelo nome do produto"
        >
          <SearchIcon />
        </Button>
      </form>
      <div className={styles.actions}>
        <Button variant="icon" to="/cart" title="Sacola de compras">
          <CartIcon />
        </Button>
        <Button variant="icon" title="Produtos favoritos">
          <FavoriteIcon />
        </Button>
        <Button variant="icon" title="Menu do usuário">
          <UserIcon />
        </Button>
      </div>
    </header>
  )
}

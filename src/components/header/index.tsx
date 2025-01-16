import { Link } from 'react-router'

import styles from './styles.module.css'

import CartIcon from '@/assets/icons/cart.svg'
import BrandIcon from '@/assets/icons/brand.svg'
import FavoriteIcon from '@/assets/icons/favorite.svg'
import SearchIcon from '@/assets/icons/search.svg'
import UserIcon from '@/assets/icons/user.svg'
import { useRef } from 'react'
import { useProducts } from '@/hooks/useProducts'

export function Header() {
  const { getByName } = useProducts()
  const formRef = useRef(null) as React.MutableRefObject<HTMLFormElement>

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const inputText = formData.get('input-search') as string

    if (!inputText?.trim()) return

    getByName(inputText)
    formRef.current.reset()
  }

  return (
    <header className={styles.container}>
      <Link to="/" className={styles.brandContainer} title="Home">
        <BrandIcon className={styles.brand} />
        <h1 className={styles.title}>E-Commerce</h1>
      </Link>
      <form
        ref={formRef}
        onSubmit={(e) => handleSearch(e)}
        className={styles.searchInput}
      >
        <input type="text" name="input-search" placeholder="Buscar produtos" />
        <button type="submit" className={styles.searchSubmit}>
          <SearchIcon />
        </button>
      </form>
      <div className={styles.actions}>
        <Link to="/cart">
          <CartIcon />
        </Link>
        <button>
          <FavoriteIcon />
        </button>
        <button>
          <UserIcon />
        </button>
      </div>
    </header>
  )
}

import { useRef } from 'react'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import styles from './styles.module.css'

import CartIcon from '@/assets/icons/cart.svg'
import BrandIcon from '@/assets/icons/brand.svg'
import FavoriteIcon from '@/assets/icons/favorite.svg'
import UserIcon from '@/assets/icons/user.svg'
import { useProductsSearch } from '@/hooks/use-products-search'
import { Button } from '@/components/ui/button'
import { selectQuantityInCart } from '@/store'
import { SearchField } from './search-field'

export function Header() {
  const quantityInCart = useSelector(selectQuantityInCart)
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
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.brandContainer} title="Tela inicial">
        <BrandIcon className={styles.headerBrand} />
        <h1 className={styles.headerTitle}>E-Commerce</h1>
      </Link>
      <div className={styles.headerActions}>
        <SearchField ref={formRef} onSearch={handleSearch} />
        <nav>
          <Button variant="icon" to="/cart" title="Sacola de compras">
            <CartIcon />
            <span className={styles.cartBadge}>{quantityInCart}</span>
          </Button>
          <Button variant="icon" title="Produtos favoritos">
            <FavoriteIcon />
          </Button>
          <Button variant="icon" title="Menu do usuário">
            <UserIcon />
          </Button>
        </nav>
      </div>
    </header>
  )
}

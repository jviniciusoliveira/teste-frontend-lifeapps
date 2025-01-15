import { Link } from 'react-router'

import styles from './styles.module.css'

import CartIcon from '@/assets/icons/cart.svg'
import BrandIcon from '@/assets/icons/brand.svg'
import FavoriteIcon from '@/assets/icons/favorite.svg'
import SearchIcon from '@/assets/icons/search.svg'
import UserIcon from '@/assets/icons/user.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.brandContainer}>
        <BrandIcon className={styles.brand} />
        <h1 className={styles.title}>E-Commerce</h1>
      </div>
      <div className={styles.searchInput}>
        <input placeholder="Buscar produtos" />
        <SearchIcon />
      </div>
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

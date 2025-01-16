import { Outlet } from 'react-router'
import styles from './styles.module.css'

import { Header } from '@/components/header'

export function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.layoutContent}>
        <Outlet />
      </main>
    </div>
  )
}

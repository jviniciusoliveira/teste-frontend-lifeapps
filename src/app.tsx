import { Provider as StoreProvider } from 'react-redux'

import { Header } from '@/components/header'
import { Categories } from '@/components/categories'
import { Products } from '@/components/products'
import { store } from '@/store/setup'

export function App() {
  return (
    <StoreProvider store={store}>
      <Header />
      <Categories />
      <Products />
    </StoreProvider>
  )
}

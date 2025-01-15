import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'

import { Header } from '@/components/header'
import { Categories } from '@/components/categories'
import { Products } from '@/components/products'
import { store } from '@/store/setup'

export function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Categories />
                <Products />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

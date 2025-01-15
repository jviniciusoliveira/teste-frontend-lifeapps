import { Provider as StoreProvider } from 'react-redux'
import { PersistGate as PersistGateProvider } from 'redux-persist/integration/react'
import { BrowserRouter, Routes, Route } from 'react-router'

import { Cart } from '@/pages/cart'
import { Home } from '@/pages/home'
import { store, persistor } from '@/store'

export function App() {
  return (
    <StoreProvider store={store}>
      <PersistGateProvider persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </PersistGateProvider>
    </StoreProvider>
  )
}

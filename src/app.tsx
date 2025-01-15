import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'

import { Home } from '@/pages/home'
import { store } from '@/store/setup'

export function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

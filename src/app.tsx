import { Provider as StoreProvider } from 'react-redux'
import { PersistGate as PersistGateProvider } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router'

import { store, persistor } from '@/store'
import { router } from '@/routes'

export function App() {
  return (
    <StoreProvider store={store}>
      <PersistGateProvider persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGateProvider>
    </StoreProvider>
  )
}

import { createBrowserRouter } from 'react-router'

import { Layout } from '@/pages/_layout'
import { Cart } from '@/pages/cart'
import { Home } from '@/pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

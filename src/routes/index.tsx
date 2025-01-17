import { createBrowserRouter } from 'react-router'

import { Layout } from '@/pages/_layout'
import { Cart } from '@/pages/cart'
import { Home } from '@/pages/home'
import { Product } from '@/pages/product'
import { NotFound } from '@/pages/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
])

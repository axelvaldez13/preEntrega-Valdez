import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './styles/Global'
import { FirebaseInit } from '@utilities/Firebase'
import Home from './Home'
import ItemListContainer from '@modules/ItemListContainer'
import ItemDetailContainer from '@modules/ItemDetailContainer'
import Checkout from '@modules/Checkout'
import { CartContextProvider } from '@utilities/CartContext'

// Initialize Firebase
FirebaseInit()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/category',
        element: <ItemListContainer />
      },
      {
        path: '/category/:categoryId',
        element: <ItemListContainer />
      },
      {
        path: '/item/:itemId',
        element: <ItemDetailContainer />
      },
      {
        path: '/cart',
        element: <Checkout />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
)

import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import Layout from '../layout/Layout'
import Center from './components/Center/Center' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import Starships from './components/Starships/Starships'

const router  = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
        children: [
          {
            path: '/',
            element: <Center />
          },
          {
        path: '/allStarShips',
        element: <Starships />
          }
    ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

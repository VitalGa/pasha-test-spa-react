import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import Layout from '../layout/Layout'
import Center from './components/Center/Center' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import Starships from './components/Starships/Starships'
import StarshipDetails from './components/StarshipDetails/StarshipDetails'
import Error from './components/Error/Error'

const router = createBrowserRouter(
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
          path: '/starships',
          element: <Starships />,
        },
        {
          path: '/starships/:id',
          element: <StarshipDetails />,
        },
        {
          path: '/404',
          element: <Error />,
        },
      ]
    }
  ]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

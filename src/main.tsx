import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import Layout from '../layout/Layout';
import Center from './components/Center/Center';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Starships from './components/Starships/Starships';
import StarshipDetails from './components/StarshipDetails/StarshipDetails';
import Error from './components/Error/Error';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Form from './components/Form/Form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Center />,
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
        path: '/form',
        element: <Form />,
      },
      {
        path: '/404',
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

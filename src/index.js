import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormHome from './pages/FormHome/FormHome.js';
import FormNew from './pages/FormNew/FormNew';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import HomePage from './pages/HomePage/HomePage.js';
import Documents from './pages/documents/Documents';
import ErroPage from './helper/ErroPage/ErroPage';
import ID from './pages/documents/ID/ID';

const router = createBrowserRouter([

  {
    path: "/",
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <FormHome />,
      },
      {
        path: "ForgotPassword",
        element: <ForgotPassword />
      },
      {
        path: "/FormNew",
        element: <FormNew />
      },
    ]
  },
  {
    path: "/HomePage",
    element: <HomePage />
  },
  {
    path: "/Documents",
    element: <Documents />
  },
  {
    path: "/documents/:id",
    element: <ID />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


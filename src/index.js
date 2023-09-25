import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormHome from './pages/FormHome/FormHome.js';
import FormNew from './pages/FormNew/FormNew';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import HomePage from './pages/HomePage/HomePage.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormHome />,
  },
  {
    path: "/FormNew",
    element: <FormNew />
  },
  {
    path: "/HomePage",
    element: <HomePage />
  },
  {
    path: "/ForgotPassword", 
    element: <ForgotPassword />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


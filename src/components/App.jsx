import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Form from '../pages/Form';
import Home from '../pages/Home';
import List from '../pages/List';
import User from '../pages/User';
import Edit from '../pages/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/List',
        Component: List,
      },
      {
        path: '/Form',
        Component: Form,
      },
      {
        path: '/User/:id',
        Component: User,
      },
      {
        path: '/edit/:id',
        Component: Edit,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;

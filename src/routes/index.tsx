import Layout from '@/components/layout/Layout'
import NotFound from '@/pages/404/NotFound'
import Login from '@/pages/auth/Login'
import { createBrowserRouter, LoaderFunctionArgs, Navigate, redirect } from 'react-router-dom'
import React from 'react'
import Page1 from '@/pages/Page1'
import { getToken } from '@/utils/user'

// eslint-disable-next-line
function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access protected router, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  const token = getToken()
  if (!token) {
    return redirect('/login')
  }
  return null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: protectedLoader,
    children: [
      { index: true, element: <Navigate to="/page1" replace /> },
      { index: true, path: '/page1', element: <Page1 /> },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    loader: () => {
      const token = getToken()
      if (token) {
        return redirect('/page1')
      }
      return null
    },
  },
])

export default router

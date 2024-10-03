import { PATHS } from '@/constants/common'
import { createBrowserRouter, LoaderFunctionArgs, Navigate } from 'react-router-dom'

// eslint-disable-next-line
function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access protected router, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  // const userInfo = getAuthenInfo()
  // if (!userInfo) {
  //   return redirect('/login')
  // }
  return null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: protectedLoader,
    children: [
      { index: true, element: <Navigate to={PATHS.REQUEST_ORDERS} replace /> },
      {
        path: PATHS.REQUEST_ORDERS,
        children: [
          { index: true, element: <RequestOrder /> },
          { index: true, path: PATHS.REQUEST_ORDERS_DETAIL, element: <RequestOrderDetail /> },
        ],
      },
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
      const userInfo = getAuthenInfo()
      if (userInfo) {
        return redirect(PATHS.REQUEST_ORDERS)
      }
      return null
    },
  },
])

export default router

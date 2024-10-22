import React, { useEffect } from 'react'
import '@/assets/styles/app.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'
import BasicToast from '@/components/common/BasicToast'
import { getUserInfoAC } from './redux/slices/user'
import { useAppDispatch } from './redux/hooks'
import { getToken } from './utils/user'

function App() {
  const dispatch = useAppDispatch()
  const token: any = getToken()

  useEffect(() => {
    if (token) {
      dispatch(getUserInfoAC())
    }
  }, [token])

  return (
    <>
      <RouterProvider router={router} />
      <BasicToast />
    </>
  )
}

export default App

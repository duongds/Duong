import React, { useEffect } from 'react'
import '@/assets/styles/app.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'
import BasicToast from '@/components/common/BasicToast'
import { getUserInfoAC } from './redux/slices/user'
import { useAppDispatch } from './redux/hooks'
import { getAuthenInfo } from './utils/user'

function App() {
  const dispatch = useAppDispatch()
  const user: any = getAuthenInfo()

  useEffect(() => {
    if (user?.accessToken) {
      dispatch(getUserInfoAC())
    }
  }, [user])

  return (
    <>
      <RouterProvider router={router} />
      <BasicToast />
    </>
  )
}

export default App

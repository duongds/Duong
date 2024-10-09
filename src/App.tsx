import React from 'react'
import '@/assets/styles/app.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'
import BasicToast from '@/components/common/BasicToast'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <BasicToast />
    </>
  )
}

export default App

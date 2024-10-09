import React from 'react'
import { Outlet } from 'react-router-dom'

const SignUpLayout = () => {
  return (
    <div>
      xxx SignUpLayout xxx asdasd
      <div className="h-full mt-6 p-4 bg-neutral-50">
        <Outlet />
      </div>
    </div>
  )
}

export default SignUpLayout

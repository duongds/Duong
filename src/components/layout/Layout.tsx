import React from 'react'
import LayoutHeader from './LayoutHeader'
import { Outlet } from 'react-router-dom'
import Menu from '../common/Menu'

const Layout = () => {
  return (
    <div className="flex">
      <div className="absolute left-0 top-0 z-9999 md:flex h-screen w-[250px] flex-col duration-300 hidden ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
        <Menu />
      </div>
      <div className="relative h-screen flex flex-1 flex-col overflow-y-auto bg-slate-100">
        <div className="sticky top-0 z-50 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
          <LayoutHeader />
        </div>
        <main className="h-full">
          <div className="mx-auto z-10 p-4 h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout

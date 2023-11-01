import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function PageContent({children}: any) {
  return (
    <>
    <Header />
    <div className="p-[30px]">
        <Outlet />
    </div>
    </>
  )
}

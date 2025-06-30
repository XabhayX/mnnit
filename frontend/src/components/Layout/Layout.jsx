import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
      <div className='min-h-screen  dark:bg-slate-800 w-full transition-backgroundColor duration-500'>
        <Navbar />
        <Outlet />
        <Footer />          
      </div>
    </>
  )
}

export default Layout
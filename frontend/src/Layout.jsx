import React from 'react'
import Footer from './components/Footer'
import TopNav from './components/TopNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <TopNav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
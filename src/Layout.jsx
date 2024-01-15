import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout


{/*jo component(header, footer) de rhe hai wo fix hai uski uder outlate de do toh woh changble hai
-> outlet me automaticli react router dom k dyara nesting kiya jata hai 
outlet use- header or footer ko constant rakhega 
    middle part change hoga. jaha pe change karna ho waha pe outlet lagega.
    use work karne k liye index ko batana padega . so go to main file and add outlet */}
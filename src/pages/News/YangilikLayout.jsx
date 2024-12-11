import React from 'react'
import TopNavbar from '../../components/navbar/topNavbar/TopNavbar'
import Navbar from '../../components/navbar/navbarMenu/Navbar'
import { Outlet } from 'react-router-dom'
import FooterWhite from '../../components/footer/FooterWhite'

function YangilikLayout() {
  return (
    <div className='talim'>
<TopNavbar/>
<Navbar/>
<Outlet/>
<FooterWhite/>
    </div>
  )
}

export default YangilikLayout
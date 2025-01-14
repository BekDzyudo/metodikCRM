import React from 'react'
import TopNavbar from '../../components/navbar/topNavbar/TopNavbar'
import Navbar from '../../components/navbar/navbarMenu/Navbar'
import { Outlet } from 'react-router-dom'
import FooterWhite from '../../components/footer/FooterWhite'

export default function LayoutDocument() {
    return (
        <div className='talim'>
            <TopNavbar />
            <Navbar />
            <Outlet />
            <FooterWhite />
        </div>
    )
}

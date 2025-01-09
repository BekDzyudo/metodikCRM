import React from 'react'
import "./rtr.css"
import { Header } from '../../components'
import { Outlet } from 'react-router-dom'
import FooterWhite from '../../components/footer/FooterWhite'

function RTRLayout() {
  return (
    <div className='rtr'>
        <Header/>
        <Outlet/>
        <FooterWhite/>
    </div>
  )
}

export default RTRLayout
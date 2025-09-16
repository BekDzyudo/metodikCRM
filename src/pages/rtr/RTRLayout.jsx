import React from 'react'
import "./rtr.css"
import { Header } from '../../components'
import { Outlet } from 'react-router-dom'
import FooterWhite from '../../components/footer/FooterWhite'
import {Footer} from "../profil/components/footer/footer"

function RTRLayout() {
  return (
    <>
      <div className='rtr'>
        <Header/>
        <Outlet/>
    </div>
        <Footer/>
    </>
  )
}

export default RTRLayout
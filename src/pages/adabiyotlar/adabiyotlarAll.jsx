import React from "react";
import "./adabiyotlarAll.scss";
import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import FooterWhite from "../../components/footer/FooterWhite";
import Next from '../../components/next/next'

export function AdabiyotlarAll() {
  return (
    <div className="adabiyotlar_Bg">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <FooterWhite />
    </div>
  );
}

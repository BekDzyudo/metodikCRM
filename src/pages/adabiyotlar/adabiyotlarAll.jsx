import React from "react";
import "./adabiyotlarAll.scss";
import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import Next from '../../components/next/next'
import { Footer } from "../profil/components/footer/footer";

export function AdabiyotlarAll() {
  return (
    <div>
      <div className="adabiyotlar_Bg">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
      <Footer />
    </div>
  );
}

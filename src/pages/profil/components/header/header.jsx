import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
//import { Navbar } from "./navbar2/navbar";
import Navbar from "../../../../components/navbar/navbarMenu/Navbar"
import TopNavbar from "../../../../components/navbar/topNavbar/TopNavbar"
//import { HeaderTop } from "./headerTop/headerTop";

export function Header() {
  return (
    <header className="header">
      <TopNavbar />
      <Navbar />
    </header>
  );
}

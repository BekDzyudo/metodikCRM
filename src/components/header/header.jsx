import React from "react";
import "./header.css";
import Navbar from "../navbar/navbarMenu/Navbar"
import TopNavbar from "../navbar/topNavbar/TopNavbar"

function Header() {
  return (
    <header className="header">
      <TopNavbar />
      <Navbar />
    </header>
  );
}
export default Header

import React from "react";
import "./meyoriy.css";
import FooterWhite from "../../components/footer/FooterWhite";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";

function MeyoriySahifa() {
  return (
    <div className="farmon farmon_fon">
      <Header/>
        <Outlet/>
      <FooterWhite />
    </div>
  );
}

export default MeyoriySahifa;

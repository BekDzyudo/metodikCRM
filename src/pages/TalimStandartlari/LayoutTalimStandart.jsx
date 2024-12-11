import React from "react";

import "./talim.css";
import { Outlet } from "react-router-dom";
import FooterWhite from "../../components/footer/FooterWhite";
import { Header } from "../../components";

function LayoutTalimStandart() {
  return (
    <div className="talim">
      <Header/>
      <Outlet />
      <FooterWhite />
    </div>
  );
}

export default LayoutTalimStandart;

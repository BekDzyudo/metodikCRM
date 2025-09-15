import React from "react";
import { Outlet } from "react-router-dom";
import {Footer} from "../profil/components/footer/footer";
import "./hududlar.css";
import { Header } from "../../components";

function HududlarLayout() {
  return (
    <>
      <div className="hudud">
        <Header/>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default HududlarLayout;

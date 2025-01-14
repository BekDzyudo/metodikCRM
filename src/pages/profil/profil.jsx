import React, { useState } from "react";
import "./profil.scss";

import { Portfolio } from "./components/portfolio";
import { TeacherFiles } from "./components/teacherFiles";
import { EditPortfolio } from "./components/modal/editPortfolio";
import { EditMalumotlar } from "./components/modal/editMalumotlar";
import { AddPortfolio } from "./components/modal/addPortfolio";

import Footer from "../../components/footer/Footer";
import { Header } from "./components/header/header";


export function Profil() {
  return (
    <>
      <div className="bg_top">
        <div className="container">
          <Header />
          <main className="main">

            <Portfolio />
            <TeacherFiles />
          </main>

          <EditPortfolio />
          <EditMalumotlar />
          <AddPortfolio />
        </div>
      </div>
      <Footer />
    </>
  );
}

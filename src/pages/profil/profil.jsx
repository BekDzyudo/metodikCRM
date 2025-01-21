import React, { useState } from "react";
import "./profil.scss";

import { Portfolio } from "./components/portfolio";
import { TeacherFiles } from "./components/teacherFiles";
import { EditPortfolio } from "./components/modal/editPortfolio";
import { EditMalumotlar } from "./components/modal/editMalumotlar";
import { AddMalumotHujjatlar } from "./components/modal/addMalumotHujjatlar";

import Footer from "../../components/footer/Footer";
import { Header } from "./components/header/header";
import { AddPortfolio } from "./components/modal/addPortfolio";


export function Profil() {
  return (
    <>
      <div className="bg_top">
        <div className="container">
          <Header />
          <main className="main">
            <Portfolio />
            {/* <TeacherFiles /> */}
          </main>

          <AddPortfolio/>
          <EditPortfolio />
          <EditMalumotlar />
          <AddMalumotHujjatlar />
        </div>
      </div>
      <Footer />
    </>
  );
}

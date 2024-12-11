import React, { useState } from "react";
import "./profil.scss";
import { TeacherBlog } from "./components/teacherBlog";
import { TeacherDesc } from "./components/teacherDesc";
import { Portfolio } from "./components/portfolio";
import { TeacherFiles } from "./components/teacherFiles";
import { EditPortfolio } from "./components/modal/editPortfolio";
import { EditMalumotlar } from "./components/modal/editMalumotlar";
import { AddPortfolio } from "./components/modal/addPortfolio";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import PageLoader from "../../Loader/PageLoader";

export function Profil() {
  return (
    <>
      <div className="bg_top">
        <div className="container">
          <Header />
          <main className="main">
            <div className="teacherInfo">
              <TeacherBlog />
              <TeacherDesc />
            </div>
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

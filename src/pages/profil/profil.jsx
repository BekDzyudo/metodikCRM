import React from "react";
import "./profil.scss";

import { Portfolio } from "./components/portfolio";
import { EditPortfolio } from "./components/modal/editPortfolio";
import { EditMalumotlar } from "./components/modal/editMalumotlar";
import { AddMalumotHujjatlar } from "./components/modal/addMalumotHujjatlar";

import Footer from "../../components/footer/Footer";
import { Header } from "./components/header/header";
import { AddPortfolio } from "./components/modal/addPortfolio";
import ChatModal from "./components/modal/chat/ChatModal";


export function Profil() {
  return (
    <>
      <div className="bg_top">
        <div className="container">
          <Header />
          <main className="main">
            <Portfolio />
          </main>

          <AddPortfolio/>
          <EditPortfolio />
          <EditMalumotlar />
          <AddMalumotHujjatlar />
          <ChatModal/>
        </div>
      </div>
      <Footer />
    </>
  );
}

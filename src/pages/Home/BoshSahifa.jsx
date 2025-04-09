import React from "react";

import Blue from "../../components/blue/Blue";
import Card from "./Cards/Card";
import Havola from "./Havola/Havola";
import Home from "./home/Home";
import Yangiliklar from "./Yangiliklar/Yangiliklar";
import Statistika from "./Statistika/Statistika";
import Korilganlar from "./Korilganlar/Korilganlar";
import Loyiha from "./Loyihalar/Loyiha";
import Mutaxassis from "./Mutaxassis/Mutaxassis";
import { Footer } from "../profil/components/footer/footer";

function BoshSahifa() {
  return (
    <div>
      <Blue />
      <Home />
      <Card />
      <Mutaxassis />
      {/* <Yangiliklar /> */}
      <Statistika />
      <Korilganlar />
      <Loyiha />
      <Havola />
      <Footer />
    </div>
  );
}

export default BoshSahifa;

import React from "react";

import Pagenation from "../../../components/pagenation/Pagenation";
import havola1 from "../../../images/img/havola1.png";
import havola2 from "../../../images/img/havola2.png";
import havola3 from "../../../images/img/havola3.png";
import havola4 from "../../../images/img/havola4.png";
import "./Havola.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

function Havola() {
  return (
    <div className="havola">
      <div className="container">
        <div className="havola_top">
          <h1>Foydali havolalar</h1>
        </div>
            <Marquee className="havola_box" speed={70} pauseOnHover>
              <Link className="havolalar">
                  <div className="havola_img">
                    <img src={havola1} alt="" />
                  </div>
                  <div className="havola_title">
                    <p>edx (AQSH)</p>
                  </div>
                </Link>
                <Link className="havolalar">
                  <div className="havola_img">
                    <img src={havola2} alt="" />
                  </div>
                  <div className="havola_title">
                    <p>IRPO (Rossiya)</p>
                  </div>
                </Link>
                <Link className="havolalar">
                  <div className="havola_img">
                    <img src={havola3} alt="" />
                  </div>
                  <div className="havola_title">
                    <p>Coursera (AQSH)</p>
                  </div>
                </Link>
                <Link className="havolalar">
                  <div className="havola_img">
                    <img src={havola4} alt="" />
                  </div>
                  <div className="havola_title">
                    <p>TIKA (Turkiya)</p>
                  </div>
                </Link>
            </Marquee>
      </div>
    </div>
  );
}

export default Havola;

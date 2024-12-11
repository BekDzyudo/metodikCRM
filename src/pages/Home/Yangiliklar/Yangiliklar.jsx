import React from "react";
import "./Yangiliklar.css";
import yangilik1 from "../../../images/img/yangilik1.png";
import { Link } from "react-router-dom";
import Pagenation from "../../../components/pagenation/Pagenation";

function Yangiliklar() {
  return (
    <div className="yangilik">
      <div className="yangilik_fon"></div>
      <div className="container">
        <div className="yangilik_name">
          <h1>Yangiliklar va e’lonlar</h1>
          <Link>Barcha yangiliklar va e’lonlar</Link>
        </div>
        <div className="row">
          <div className="col-12 yangilik_box">
            <div className="col-3">
              <div className="yangilik_card">
                <Link>
                  <div className="yangilik_img">
                    <img src={yangilik1} alt="yangilik" />
                  </div>

                  <h4 className="yangilik_title">
                    Сhet eldagi diplomatik vakolatxonalar ham professional
                  </h4>
                  <p className="yangilik_text">
                    Oliy va o‘rta maxsus taʼlim vazirining professional taʼlimni
                    rivojlantirish masalalari bo‘yicha o‘rinbosari Sadoqat
                    Siddiqova Tashqi ishlar vaziri vazifasini bajaruvchi...
                  </p>
                  <div className="yangilik_bottom">
                    <span>30-Iyun, 2022-yil </span> <span>16:42</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-3">
              <div className="yangilik_card">
                <Link>
                  <div className="yangilik_img">
                    <img src={yangilik1} alt="yangilik" />
                  </div>

                  <h4 className="yangilik_title">
                    Сhet eldagi diplomatik vakolatxonalar ham professional
                  </h4>
                  <p className="yangilik_text">
                    Oliy va o‘rta maxsus taʼlim vazirining professional taʼlimni
                    rivojlantirish masalalari bo‘yicha o‘rinbosari Sadoqat
                    Siddiqova Tashqi ishlar vaziri vazifasini bajaruvchi...
                  </p>
                  <div className="yangilik_bottom">
                    <span>30-Iyun, 2022-yil </span> <span>16:42</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-3">
              <div className="yangilik_card">
                <Link>
                  <div className="yangilik_img">
                    <img src={yangilik1} alt="yangilik" />
                  </div>

                  <h4 className="yangilik_title">
                    Сhet eldagi diplomatik vakolatxonalar ham professional
                  </h4>
                  <p className="yangilik_text">
                    Oliy va o‘rta maxsus taʼlim vazirining professional taʼlimni
                    rivojlantirish masalalari bo‘yicha o‘rinbosari Sadoqat
                    Siddiqova Tashqi ishlar vaziri vazifasini bajaruvchi...
                  </p>
                  <div className="yangilik_bottom">
                    <span>30-Iyun, 2022-yil </span> <span>16:42</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-3">
              <div className="yangilik_card">
                <Link>
                  <div className="yangilik_img">
                    <img src={yangilik1} alt="yangilik" />
                  </div>

                  <h4 className="yangilik_title">
                    Сhet eldagi diplomatik vakolatxonalar ham professional
                  </h4>
                  <p className="yangilik_text">
                    Oliy va o‘rta maxsus taʼlim vazirining professional taʼlimni
                    rivojlantirish masalalari bo‘yicha o‘rinbosari Sadoqat
                    Siddiqova Tashqi ishlar vaziri vazifasini bajaruvchi...
                  </p>
                  <div className="yangilik_bottom">
                    <span>30-Iyun, 2022-yil </span> <span>16:42</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Pagenation />
      </div>
    </div>
  );
}

export default Yangiliklar;

import React from "react";
import "./Korilganlar.css";
import korilgan from "../../../images/img/korilgan.png";
import { Link } from "react-router-dom";
import Pagenation from "../../../components/pagenation/Pagenation";

function Korilganlar() {
  return (
    <div className="korilgan">
      <div className="container">
        <div className="korilgan_top">
          <h1>Eng ko‘p ko‘rilganlar</h1>
          <Pagenation />
        </div>
        <div className="row">
          <div className="col-12 korilgan_card-box">
            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <p>Mutaxassislik</p>
                    <span>
                      Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                      tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                    </span>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <span> O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i> 3750
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <p>Mutaxassislik</p>
                    <span>
                      Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                      tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                    </span>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <span> O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i> 3750
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <p>Mutaxassislik</p>
                    <span>
                      Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                      tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                    </span>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <span> O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i> 3750
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korilganlar;

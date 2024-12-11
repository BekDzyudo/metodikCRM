import React, { useState } from "react";

import toqimachilik from "../../images/img/toqimachilik.png";
import { Link } from "react-router-dom";
import PagenationWhite from "../../components/pagenation/PagenationWhite";

function TalimStandartSahifa() {
  const [isActivesohasi, setIsActivesohasi] = useState(false);
  const [selectedsohasi, setIsSelectedsohasi] = useState("Ta’lim sohasi");
  const [isActiveyonalish, setIsActiveyonalish] = useState(false);
  const [selectedyonalish, setIsSelectedyonalish] =
    useState("Ta’lim yo‘nalishi");

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/" className="bosh">
            Bosh sahifa
          </Link>
          <Link to="/Talim" className="back">
            Ta'lim standartlari va fanlar
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="talim_searchs">
          <div className="talim_search">
            <i className="bi bi-search"></i>
            <input type="search" placeholder="izlash" />
          </div>
          <div className="data_select">
            <div className="dropdown">
              <div
                onClick={(e) => {
                  setIsActivesohasi(!isActivesohasi);
                }}
                className="dropdown-btn"
              >
                {selectedsohasi}
                <span
                  className={
                    isActivesohasi ? "fas fa-caret-up" : "fas fa-caret-down"
                  }
                />
              </div>
              <div
                className="dropdown-content"
                style={{ display: isActivesohasi ? "block" : "none" }}
              >
                <div
                  onClick={(e) => {
                    setIsSelectedsohasi(e.target.textContent);
                    setIsActivesohasi(!isActivesohasi);
                  }}
                  className="item"
                >
                  Jurnalistika va ijtimoiy axborot-2021
                </div>
                <div
                  className="item"
                  onClick={(e) => {
                    setIsSelectedsohasi(e.target.textContent);
                    setIsActivesohasi(!isActivesohasi);
                  }}
                >
                  Biznes va boshqaruv-2021
                </div>
                <div
                  className="item"
                  onClick={(e) => {
                    setIsSelectedsohasi(e.target.textContent);
                    setIsActivesohasi(!isActivesohasi);
                  }}
                >
                  Huquq-2021
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div
                onClick={(e) => {
                  setIsActiveyonalish(!isActiveyonalish);
                }}
                className="dropdown-btn"
              >
                {selectedyonalish}
                <span
                  className={
                    isActiveyonalish ? "fas fa-caret-up" : "fas fa-caret-down"
                  }
                />
              </div>
              <div
                className="dropdown-content"
                style={{ display: isActiveyonalish ? "block" : "none" }}
              >
                <div
                  onClick={(e) => {
                    setIsSelectedyonalish(e.target.textContent);
                    setIsActiveyonalish(!isActiveyonalish);
                  }}
                  className="item"
                >
                  Aktyorlik san’ati (turlari bо‘yicha)-2021
                </div>
                <div
                  className="item"
                  onClick={(e) => {
                    setIsSelectedyonalish(e.target.textContent);
                    setIsActiveyonalish(!isActiveyonalish);
                  }}
                >
                  Sirk san’ati (turlari bо‘yicha)-2021
                </div>
                <div
                  className="item"
                  onClick={(e) => {
                    setIsSelectedyonalish(e.target.textContent);
                    setIsActiveyonalish(!isActiveyonalish);
                  }}
                >
                  Xoreografiya (turlari bо‘yicha)-2021
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 talim_box">
          <div className="col-3 talim_left">
            <div className="talim_menu">
              <div className="talim_menu-title">
                <h4>Kasb va mutaxassisliklar</h4>
                <span>500</span>
              </div>
              <ul>
                <li>
                  <Link>Talim</Link>
                </li>
                <li>
                  <Link>San’at va gumanitar fanlar</Link>
                </li>
                <li>
                  <Link>Ijtimoiy fanlar, jurnalistika va axborot</Link>
                </li>
                <li>
                  <Link>Biznes, boshqaruv va huquq</Link>
                </li>
                <li>
                  <Link>Tabiiy fanlar, matematika va statistika</Link>
                </li>
                <li>
                  <Link>Axborot-kommunikatsiya texnologiyalari</Link>
                </li>
                <li>
                  <Link>Muhandislik, ishlov berish va qurilish sohalari</Link>
                </li>
                <li>
                  <Link>Qishloq, o‘mon, baliq xo‘jaligi va veterinariya</Link>
                </li>
                <li>
                  <Link>Sog‘liqni saqlash va ijtimoiy ta’minot</Link>
                </li>
                <li>
                  <Link>Xizmatlar</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9 talim_right">
            <div className="talim_cards">
              <Link
                to="/Talim-Standartlari-Fanlar/detail"
                className="col-3 talim_card"
              >
                <h3 className="talim_card-name">Mutaxassislik</h3>
                <div className="talim_card-body">
                  <p className="talim_card-title">
                    Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                    tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                  </p>
                  <div className="talim_card-img">
                    <img src={toqimachilik} alt="" />
                  </div>
                </div>
                <div className="talim_card-footer">
                  <span>O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i>3075
                  </span>
                </div>
              </Link>
              <Link
                to="/Talim-Standartlari-Fanlar/detail"
                className="col-3 talim_card"
              >
                <h3 className="talim_card-name">Mutaxassislik</h3>
                <div className="talim_card-body">
                  <p className="talim_card-title">
                    Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                    tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                  </p>
                  <div className="talim_card-img">
                    <img src={toqimachilik} alt="" />
                  </div>
                </div>
                <div className="talim_card-footer">
                  <span>O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i>3075
                  </span>
                </div>
              </Link>
              <Link
                to="/Talim-Standartlari-Fanlar/detail"
                className="col-3 talim_card"
              >
                <h3 className="talim_card-name">Mutaxassislik</h3>
                <div className="talim_card-body">
                  <p className="talim_card-title">
                    Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                    tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                  </p>
                  <div className="talim_card-img">
                    <img src={toqimachilik} alt="" />
                  </div>
                </div>
                <div className="talim_card-footer">
                  <span>O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i>3075
                  </span>
                </div>
              </Link>
              <Link
                to="/Talim-Standartlari-Fanlar/detail"
                className="col-3 talim_card"
              >
                <h3 className="talim_card-name">Mutaxassislik</h3>
                <div className="talim_card-body">
                  <p className="talim_card-title">
                    Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                    tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                  </p>
                  <div className="talim_card-img">
                    <img src={toqimachilik} alt="" />
                  </div>
                </div>
                <div className="talim_card-footer">
                  <span>O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i>3075
                  </span>
                </div>
              </Link>
              <Link
                to="/Talim-Standartlari-Fanlar/detail"
                className="col-3 talim_card"
              >
                <h3 className="talim_card-name">Mutaxassislik</h3>
                <div className="talim_card-body">
                  <p className="talim_card-title">
                    Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                    tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                  </p>
                  <div className="talim_card-img">
                    <img src={toqimachilik} alt="" />
                  </div>
                </div>
                <div className="talim_card-footer">
                  <span>O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i>3075
                  </span>
                </div>
              </Link>
              <Link
                to="/Talim-Standartlari-Fanlar/detail"
                className="col-3 talim_card"
              >
                <h3 className="talim_card-name">Mutaxassislik</h3>
                <div className="talim_card-body">
                  <p className="talim_card-title">
                    Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                    tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                  </p>
                  <div className="talim_card-img">
                    <img src={toqimachilik} alt="" />
                  </div>
                </div>
                <div className="talim_card-footer">
                  <span>O'rta professional talim</span>
                  <span>
                    <i className="bi bi-eye-fill"></i>3075
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PagenationWhite />
    </div>
  );
}

export default TalimStandartSahifa;

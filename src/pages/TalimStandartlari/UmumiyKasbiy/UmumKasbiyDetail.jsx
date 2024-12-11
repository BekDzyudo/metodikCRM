import React from "react";

import { Link } from "react-router-dom";

import "./UmumiyKasbiy.css";
import umum from "../../../images/img/umumkasbiy.png";

function UmumKasbiyDetail() {
  return (
    <div>
     
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
          <div className="right">
            <Link>
              <i className="bi bi-arrow-left"></i> Orqaga
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="talim_searchs">
            <div className="talim_search">
              <i className="bi bi-search"></i>
              <input type="search" placeholder="izlash" />
            </div>
          </div>
          <div className="col-12 talim_box">
            <div className="col-3">
              <div className="talim_menu">
                <ul>
                  <li>
                    <Link>Elektrotexnika va Elektronika asoslari</Link>
                  </li>
                  <li>
                    <Link>Mehnat muhofazasi va xavfsizlik texnikasi</Link>
                  </li>
                  <li>
                    <Link>Konstruktsion materiallar</Link>
                  </li>
                  <li>
                    <Link>Elektrotexnika va Elektronika asoslari</Link>
                  </li>
                  <li>
                    <Link>Texnikaviy chizmachilik</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <h4 className="umumkasbiy_detail-title">
                Texnikaviy chizmachilik
              </h4>
              <div className="umumkasbiy_detail-img">
                <img src={umum} alt="" />
              </div>
            </div>
            <div className="col-6 talim_detail-cards">
              <h4>O'quv fanlari yoki modullar</h4>
              <div className="umumkasbiy_detail-card">
                <div className="talim_detail-title">
                  <p>Fan o'qituvchilari</p>
                  <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
                </div>
                <div className="talim_detail-btn">
                  <Link to="/Talim-Standartlari-Fanlar/fan-oqtivchisi">Yuklab olish</Link>
                </div>
              </div>
              <div className="umumkasbiy_detail-card">
                <div className="talim_detail-title">
                  <p>O'quv materiallari to'plami</p>
                  <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
                </div>
                <div className="talim_detail-btn">
                  <Link to="/Talim-Standartlari-Fanlar/oquv-material">Yuklab olish</Link>
                </div>
              </div>
              <div className="umumkasbiy_detail-card">
                <div className="talim_detail-title">
                  <p>O'quv amaliyotlari</p>
                  <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
                </div>
                <div className="talim_detail-btn">
                  <Link to="/Talim-Standartlari-Fanlar/oquv-amaliyot">Yuklab olish</Link>
                </div>
              </div>
              <div className="umumkasbiy_detail-text">
                <h4>Izohlar</h4>
                <textarea placeholder="Izoh matni..."></textarea>
                <div className="talim_detail-btn">
                  <Link>Yuborish</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UmumKasbiyDetail;

import React from "react";

import { Link } from "react-router-dom";
import toqimachilik1 from "../../images/img/toqimachilik1.png";

function TalimStandartDetail() {
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
          <div className="col-4 talim_title">
            <h4>
              Tо‘qimachilik ishlab chiqarish (soha bо‘yicha: yigi- ruv, tо‘quv,
              bо‘yoq, tikuv-trikotaj va x.k.)
            </h4>
          </div>
        </div>
        <div className="col-12 talim_box">
          <div className="col-3">
            <div className="talim_menu">
              <ul>
                <li>
                  <Link>Texnikaviy chizmachilik</Link>
                </li>
                <li>
                  <Link>Elektrotexnika va elektronika asoslari</Link>
                </li>
                <li>
                  <Link>Konstruktsion materiallar</Link>
                </li>
                <li>
                  <Link>
                    Issiqlik texnikasi nazariy asoslari va issiqlik elektr
                    stantsiyalari
                  </Link>
                </li>
                <li>
                  <Link>
                    Issiqlik elektr stantsiya va qozonxonalarda chilangarlik
                    ishlari
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-4">
            <div className="talim_detail-img">
              <img src={toqimachilik1} alt="" />
            </div>
            <div className="talim_detail-text">
              <h4>Izohlar</h4>
              <textarea placeholder="Izoh matni..."></textarea>
              <div className="talim_detail-btn">
                <Link>Yuborish</Link>
              </div>
            </div>
          </div>
          <div className="col-5 talim_detail-cards">
            <h4>Ta'lim dasturlari</h4>
            <div className="talim_detail-card">
              <div className="talim_detail-title">
                <p>Malaka talabi</p>
                <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
              </div>
              <div className="talim_detail-btn">
                <Link>Yuklab olish</Link>
              </div>
            </div>
            <div className="talim_detail-card">
              <div className="talim_detail-title">
                <p>O'quv fanlari yoki modullar</p>
                <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
              </div>
              <div className="talim_detail-btn">
                <Link>Yuklab olish</Link>
              </div>
            </div>
            <div className="talim_detail-card">
              <div className="talim_detail-title">
                <p>O'quv dastur</p>
                <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
              </div>
              <div className="talim_detail-btn">
                <Link>Yuklab olish</Link>
              </div>
            </div>
            <h4>O'quv fanlari yoki modullar</h4>
            <div className="talim_detail-card">
              <div className="talim_detail-title">
                <p>Umumkasbiy fanlar</p>
                <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
              </div>
              <div className="talim_detail-btn">
                <Link to="/Talim-Standartlari-Fanlar/umum-kasbiy">Batafsil</Link>
              </div>
            </div>
            <div className="talim_detail-card">
              <div className="talim_detail-title">
                <p>Maxsus fanlar</p>
                <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
              </div>
              <div className="talim_detail-btn">
                <Link to="/Talim-Standartlari-Fanlar/umum-kasbiy">Batafsil</Link>
              </div>
            </div>
            <div className="talim_detail-card">
              <div className="talim_detail-title">
                <p>O'quv amaliyotlari</p>
                <span>So’ngi o’zgartirilgan sana: 14-Fevral, 2022-yil</span>
              </div>
              <div className="talim_detail-btn">
                <Link to="/Talim-Standartlari-Fanlar/oquv-amaliyot">Batafsil</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalimStandartDetail;

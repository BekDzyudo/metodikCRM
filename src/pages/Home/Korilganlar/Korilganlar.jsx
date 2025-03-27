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
          <h1>Reytingi yuqori o'qituvchilar</h1>
        </div>
        <div className="row">
          <div className="col-12 korilgan_card-box">
            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <div className="fish">
                      <h6>F.I.SH</h6>
                      <p>Alijonov Valijon</p>
                    </div>
                   <div className="teacherhudud">
                    <h6>HUDUD</h6>
                    <span>
                      Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                    </span>
                   </div>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <div className="fan">
                    <h6>FAN</h6>
                    <p> Musiqa va san'at asoslari</p>
                  </div>
                  <div className="reyting">
                    <h6>REYTING</h6>
                    <p> 3750</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <div className="fish">
                      <h6>F.I.SH</h6>
                      <p>Alijonov Valijon</p>
                    </div>
                   <div className="teacherhudud">
                    <h6>HUDUD</h6>
                    <span>
                      Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                    </span>
                   </div>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <div className="fan">
                    <h6>FAN</h6>
                    <p> Musiqa va san'at asoslari</p>
                  </div>
                  <div className="reyting">
                    <h6>REYTING</h6>
                    <p> 3750</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <div className="fish">
                      <h6>F.I.SH</h6>
                      <p>Alijonov Valijon</p>
                    </div>
                   <div className="teacherhudud">
                    <h6>HUDUD</h6>
                    <span>
                      Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                    </span>
                   </div>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <div className="fan">
                    <h6>FAN</h6>
                    <p> Musiqa va san'at asoslari</p>
                  </div>
                  <div className="reyting">
                    <h6>REYTING</h6>
                    <p> 3750</p>
                  </div>
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

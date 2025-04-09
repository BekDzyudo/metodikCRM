import React from "react";
import "./Korilganlar.css";
import img2 from "../../../images/img/teacher/2.jpg"
import img3 from "../../../images/img/teacher/3.jpg"
import img4 from "../../../images/img/teacher/4.jpg"
import img5 from "../../../images/img/teacher/5.jpg"
import img6 from "../../../images/img/teacher/6.jpg"
import img7 from "../../../images/img/teacher/7.jpg"
import Marquee from "react-fast-marquee";

function Korilganlar() {
  return (
    <div className="korilgan">
      <div className="korilgan_top">
        <h1>Reytingi yuqori o‘qituvchilar</h1>
      </div>
      <div className="row">
        <Marquee className="korilgan_card-box" speed={70} pauseOnHover>
          <div className="korilgan_card">
            <div className="korilgan_img">
              <img src={img2} alt="" />
            </div>
            <div className="korilgan_card-body">
              <div className="korilgan_title">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="fish">
                    <h6>F.I.SH</h6>
                    <p>Alijonov Valijon</p>
                  </div>
                  <span style={{ background: "blue", borderRadius: "8px", height:"min-content", padding:"5px 10px", color:"white" }}>
                    18
                  </span>
                </div>
                <div className="teacherhudud">
                  <h6>HUDUD</h6>
                  <span>
                    Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                  </span>
                </div>
                <div className="fan">
                  <h6>FAN</h6>
                  <p> Musiqa va san'at asoslari</p>
                </div>
                <div className="reyting">
                  <h6>REYTING</h6>
                  <p> 3750</p>
                </div>
              </div>
            </div>
          </div>
          <div className="korilgan_card">
            <div className="korilgan_img">
              <img src={img4} alt="" />
            </div>
            <div className="korilgan_card-body">
              <div className="korilgan_title">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="fish">
                    <h6>F.I.SH</h6>
                    <p>Alijonov Valijon</p>
                  </div>
                  <span style={{ background: "blue", borderRadius: "8px", height:"min-content", padding:"5px 10px", color:"white" }}>
                    16
                  </span>
                </div>
                <div className="teacherhudud">
                  <h6>HUDUD</h6>
                  <span>
                    Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                  </span>
                </div>
                <div className="fan">
                  <h6>FAN</h6>
                  <p> Musiqa va san'at asoslari</p>
                </div>
                <div className="reyting">
                  <h6>REYTING</h6>
                  <p> 3750</p>
                </div>
              </div>
            </div>
          </div>
          <div className="korilgan_card">
            <div className="korilgan_img">
              <img src={img6} alt="" />
            </div>
            <div className="korilgan_card-body">
              <div className="korilgan_title">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="fish">
                    <h6>F.I.SH</h6>
                    <p>Alijonov Valijon</p>
                  </div>
                  <span style={{ background: "blue", borderRadius: "8px", height:"min-content", padding:"5px 10px", color:"white" }}>
                    10
                  </span>
                </div>
                <div className="teacherhudud">
                  <h6>HUDUD</h6>
                  <span>
                    Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                  </span>
                </div>
                <div className="fan">
                  <h6>FAN</h6>
                  <p> Musiqa va san'at asoslari</p>
                </div>
                <div className="reyting">
                  <h6>REYTING</h6>
                  <p> 3750</p>
                </div>
              </div>
            </div>
          </div>
          <div className="korilgan_card">
            <div className="korilgan_img">
              <img src={img3} alt="" />
            </div>
            <div className="korilgan_card-body">
              <div className="korilgan_title">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="fish">
                    <h6>F.I.SH</h6>
                    <p>Alijonov Valijon</p>
                  </div>
                  <span style={{ background: "blue", borderRadius: "8px", height:"min-content", padding:"5px 10px", color:"white" }}>
                    25
                  </span>
                </div>
                <div className="teacherhudud">
                  <h6>HUDUD</h6>
                  <span>
                    Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                  </span>
                </div>
                <div className="fan">
                  <h6>FAN</h6>
                  <p> Musiqa va san'at asoslari</p>
                </div>
                <div className="reyting">
                  <h6>REYTING</h6>
                  <p> 3750</p>
                </div>
              </div>
            </div>
          </div>
          <div className="korilgan_card">
            <div className="korilgan_img">
              <img src={img7} alt="" />
            </div>
            <div className="korilgan_card-body">
              <div className="korilgan_title">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="fish">
                    <h6>F.I.SH</h6>
                    <p>Alijonov Valijon</p>
                  </div>
                  <span style={{ background: "blue", borderRadius: "8px", height:"min-content", padding:"5px 10px", color:"white" }}>
                    40
                  </span>
                </div>
                <div className="teacherhudud">
                  <h6>HUDUD</h6>
                  <span>
                    Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                  </span>
                </div>
                <div className="fan">
                  <h6>FAN</h6>
                  <p> Musiqa va san'at asoslari</p>
                </div>
                <div className="reyting">
                  <h6>REYTING</h6>
                  <p> 3750</p>
                </div>
              </div>
            </div>
          </div>
          <div className="korilgan_card">
            <div className="korilgan_img">
              <img src={img5} alt="" />
            </div>
            <div className="korilgan_card-body">
              <div className="korilgan_title">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="fish">
                    <h6>F.I.SH</h6>
                    <p>Alijonov Valijon</p>
                  </div>
                  <span style={{ background: "blue", borderRadius: "8px", height:"min-content", padding:"5px 10px", color:"white" }}>
                    52
                  </span>
                </div>
                <div className="teacherhudud">
                  <h6>HUDUD</h6>
                  <span>
                    Buxoro viloyati, Olot tumani, Qurulish kasb hunar maktabi
                  </span>
                </div>
                <div className="fan">
                  <h6>FAN</h6>
                  <p> Musiqa va san'at asoslari</p>
                </div>
                <div className="reyting">
                  <h6>REYTING</h6>
                  <p> 3750</p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Korilganlar;

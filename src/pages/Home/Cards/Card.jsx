import React from "react";
import "./Card.scss";
import worls from "../../../images/img/worls.png";
import { IoSchool } from "react-icons/io5";
import { RiSchoolLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="doira">
      <div className="container">
        <div className="row">
          <div className="col-12 cards">
            <div className="col-4 ">
              <div className="card muassasalar">
                <div className="card_img slateblue">
                  <RiSchoolLine style={{width:"45px", height:"45px"}}/>
                </div>
                <h4>
                  Kasbiy ta’lim <br /> muassasalari
                </h4>
                <Link className="birlashma slateblue" to="/viloyatlar">Batafsil</Link>
              </div>
            </div>
            <div className="col-4">
              <div className="card eduprof">
                <div className="card_img orange">
                  <IoSchool style={{width:"45px", height:"45px"}}/>
                </div>
                <h4>
                  Ta'lim standartlari <br /> va fanlar
                </h4>
                <Link className="birlashma orange" to="/Talim-Standartlari-Fanlar">Batafsil</Link>
              </div>
            </div>
            <div className="col-4">
              <div className="card rtr">
                <div className="card_img deepskyblue">
                  <FaLaptopCode style={{width:"45px", height:"45px"}}/>
                </div>
                <h4>
                  Raqamli ta'lim <br /> resurslari
                </h4>
                <Link className="birlashma deepskyblue" to="/raqamli-talim-resurslari">Batafsil</Link>
              </div>
            </div>
            <div className="col-4">
              <div className="card rating">
                <div className="card_img pink">
                 <BsFillPersonVcardFill style={{width:"45px", height:"45px"}}/>
                </div>
                <h4>Bizning o'qituvchilar <br /> reytingi</h4>
                <Link className="birlashma pink" to="/rating">Batafsil</Link>
              </div>
            </div>
            <div className="col-4">
              <div className="card material">
                <div className="card_img yellow">
                <ImBooks style={{width:"45px", height:"45px"}}/>
                </div>
                <h4>Foydalanish uchun <br /> materiallar</h4>
                <Link className="birlashma yellow" to="/materiallar">Batafsil</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

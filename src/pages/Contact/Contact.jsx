import React from "react";

import "./global.css";
import "./Contact.css";
import FooterWhite from "../../components/footer/FooterWhite";
import GrenarrovvImg from "../../images/img/green-arrow.svg";
import GrenarrovImg from "../../images/img/green_arrow 2.svg";
import telImg from "../../images/img/tel.svg";
import sendImg from "../../images/img/send.svg";
import locImg from "../../images/img/location.svg";
import { Header } from "../../components";

function Contact() {
  return (
    <div className="contact">
     <Header/>
      <div className="container">
        <div className="bd">
          <div className="header__form">
            <div className="miniforms">
              <h2> Biz bilan bog’laning</h2>
              <div className="mininbar">
                <form action="#">
                  <div className="txt_field">
                    <input type="text" placeholder="Ismingiz" />
                  </div>
                  <div className="txt_field">
                    <input type="text" placeholder="Email" />
                  </div>
                </form>
                <div className="txt_fieldd">
                  <form action="#">
                    <div>
                      <textarea type="text" placeholder="Xabar"></textarea>

                    </div>
                  </form>
                </div>
              </div>
              <div className="contact_btn">
                <button>Yuborish</button>
              </div>
            </div>
            <img className="line" src={GrenarrovvImg} alt="" />
          </div>
          <div className="info">
            <div className="telefon">
              <img src={telImg} alt="" />
              <a href="tel:+74951234567" className="phone">
                +7 (495) 123-45-67
              </a>
            </div>
            <div className="send">
              <img src={sendImg} alt="" />
              <a href="text" className="mail">
                pedagoginnovatsiyalar@edu.uz
              </a>
            </div>
            <div className="location">
              <img src={locImg} alt="" />
              <a href="text" className="loc">
                Toshkent shahar, Olmazor tumani, Ziyo ko‘chasi, 76-uy
              </a>
            </div>
            <img className="lin2" src={GrenarrovImg} alt="" />
          </div>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              title="title_contact"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=uzbekston toshkent olmazor&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <FooterWhite />
    </div>
  );
}

export default Contact;

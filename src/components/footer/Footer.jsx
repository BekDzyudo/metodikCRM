import React from "react";
import "./Footer.css";
import logowhite from "../../images/img/PTRI-new-logotype2-white.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 footer_box">
            <div className="col-4">
              <div className="footer_name">
                <h4>Metodik ta’minot platformasi</h4>
                <Link>
                  <div className="footer_logo">
                    <div className="footer_img">
                      <img src={logowhite} alt="" />
                    </div>
                    <div className="footer_title">
                      <p>
                        PROFESSIONAL TA'LIMNI <br /> RIVOJLANTIRISH <br />
                        INSTITUTI
                      </p>
                    </div>
                  </div>
                </Link>
                <p>
                  Platformada e’lon qilingan materiallar Institutning
                  intellektual mulki hisoblanadi. Professional ta’lim
                  muassasalarida faoliyat olib borayotgan pedagoglardan tashqari
                  barcha uchun ulardan nusxa kо‘chirish, tarqatish va boshqa
                  shakllarda foydalanish faqat Institutning yozma roziligi bilan
                  amalga oshiriladi.
                </p>
              </div>
            </div>
            <div className="col-8 footer_menu">
              <div className="col-3">
                <ul>
                  <li>
                    <Link>Bosh sahifa</Link>
                  </li>
                  <li>
                    <Link>Guvohnomani tekshirish</Link>
                  </li>
                  <li>
                    <Link>Yangiliklar va e’lonlar</Link>
                  </li>
                  <li>
                    <Link>Jurnal</Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    <Link>O'quv me’yoriy hujjatlar</Link>
                  </li>
                  <li>
                    <Link>O‘quv adabiyotlar</Link>
                  </li>
                  <li>
                    <Link>O‘qitish materiallari to'plami</Link>
                  </li>
                  <li>
                    <Link>Metodik mahsulotlar</Link>
                  </li>
                  <li>
                    <Link>Tizimga kirish</Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    <Link>
                      <span>Telefon</span>
                      <p>+998 71 246-90-37</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Email</span>
                      <p>pedagoginnovatsiyalar@edu.uz</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Manzil</span>
                      <p>
                        Toshkent shahar, Olmazor tumani, Ziyo ko‘chasi, 76-uy
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            © 2023 Metodik ta’minot platformasi. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

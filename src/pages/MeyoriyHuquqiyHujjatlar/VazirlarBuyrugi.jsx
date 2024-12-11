import React from "react";

import "./meyoriy.css";
import buyruq from "../../images/img/buyruq.jpg";
import { Link } from "react-router-dom";
import PagenationWhite from "../../components/pagenation/PagenationWhite";
import MeyoriySidebar from "./components/MeyoriySidebar";

function VazirlarBuyrugi() {
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/" className="bosh">
            Bosh sahifa
          </Link>
          <Link to="/Meyoriy" className="bosh">
            Me’yoriy-huquqiy hujjatlar
          </Link>
          <Link to="/vazirligBuyruqi" className="back">
            Vazirlig buyruqlari ta'lim
          </Link>
        </div>
        <div className="right">
          <Link>
            <i className="bi bi-arrow-left-short"></i> Orqaga
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className=" farmon_body">
            <MeyoriySidebar />
            <div className="col-10 farmon_right">
              <div className="col-3 farmon_right-img">
                <img src={buyruq} alt="farmon" />
              </div>
              <div className="col-7">
                <p>
                  O'zbekiston Respublikasi oliy ta'lim muassasalari talabalari
                  o'rtasida o;tkaziladigan "Yil talabasi-2019" tanlovining yangi
                  taxriridagi nizomi.
                </p>
                <p>
                  Oliy va professional talim muassasalari xodimlari uchun
                  namunaviy Kasb odobnomasi 2019 yil 30 dekabrdagi 1201 sonli
                </p>

                <p>
                  «Оliy va urta mahsus, kasb-hunar ta'lim massasalari va akdemik
                  liceylarining professor-ukituvchilari, hodimlari va
                  talabalariga karatilgan nokonuniy hatti-harakatlarni oldini
                  olish buyicha masalalarni muhokama kilish 12.2018 yil 24
                  dekabrdagi 87-01-854 sonli Oliy va professional talim
                  muassasalari xodimlari uchun namunaviy Kasb odobnomasi 2019
                  yil 30 dekabrdagi 1201 sonli. Oliy ta'lim muassasalari
                  talabalari o'rtasida o;tkaziladigan "Yil talabasi-2019"
                  tanlovining yangi taxriridagi nizomi.
                </p>
              </div>

              <p>
                O'zbekiston Respublikasi oliy ta'lim muassasalari talabalari
                o'rtasida o;tkaziladigan "Yil talabasi-2019" tanlovining yangi
                taxriridagi nizomi.
              </p>

              <p>
                «Оliy va urta mahsus, kasb-hunar ta'lim massasalari va akdemik
                liceylarining professor-ukituvchilari, hodimlari va talabalariga
                karatilgan nokonuniy hatti-harakatlarni oldini olish buyicha
                masalalarni muhokama kilish 12.2018 yil 24 dekabrdagi 87-01-854
                sonli
              </p>
              <p>
                Oliy va professional talim muassasalari xodimlari uchun
                namunaviy Kasb odobnomasi 2019 yil 30 dekabrdagi 1201 sonli
              </p>

              <p>
                O'zbekiston Respublikasi oliy ta'lim muassasalari talabalari
                o'rtasida o;tkaziladigan "Yil talabasi-2019" tanlovining yangi
                taxriridagi nizomi.
              </p>
              <p>
                O'zbekiston Respublikasi oliy ta'lim muassasalari talabalari
                o'rtasida o;tkaziladigan "Yil talabasi-2019" tanlovining yangi
                taxriridagi nizomi.
              </p>

              <p>
                «Оliy va urta mahsus, kasb-hunar ta'lim massasalari va akdemik
                liceylarining professor-ukituvchilari, hodimlari va talabalariga
                karatilgan nokonuniy hatti-harakatlarni oldini olish buyicha
                masalalarni muhokama kilish 12.2018 yil 24 dekabrdagi 87-01-854
                sonli
              </p>
              <p>
                Oliy va professional talim muassasalari xodimlari uchun
                namunaviy Kasb odobnomasi 2019 yil 30 dekabrdagi 1201 sonli
              </p>

              <p>
                O'zbekiston Respublikasi oliy ta'lim muassasalari talabalari
                o'rtasida o;tkaziladigan "Yil talabasi-2019" tanlovining yangi
                taxriridagi nizomi.
              </p>
              <p>
                O'zbekiston Respublikasi oliy ta'lim muassasalari talabalari
                o'rtasida o;tkaziladigan "Yil talabasi-2019" tanlovining yangi
                taxriridagi nizomi.
              </p>

              <p>
                «Оliy va urta mahsus, kasb-hunar ta'lim massasalari va akdemik
                liceylarining professor-ukituvchilari, hodimlari va talabalariga
                karatilgan nokonuniy hatti-harakatlarni oldini olish buyicha
                masalalarni muhokama kilish 12.2018 yil 24 dekabrdagi 87-01-854
                sonli
              </p>
              <p>
                Oliy va professional talim muassasalari xodimlari uchun
                namunaviy Kasb odobnomasi 2019 yil 30 dekabrdagi 1201 sonli
              </p>

              <p>
                O'zbekiston Respublikasi oliy ta'lim muassasalari talabalari
                o'rtasida o;tkaziladigan "Yil talabasi-2019" tanlovining yangi
                taxriridagi nizomi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PagenationWhite />
    </div>
  );
}

export default VazirlarBuyrugi;

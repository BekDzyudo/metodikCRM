import React from "react";
import "./meyoriy.css";
import farmon from "../../images/img/farmon.png";
import { Link } from "react-router-dom";
import PagenationWhite from "../../components/pagenation/PagenationWhite";
import MeyoriySidebar from "./components/MeyoriySidebar";

function PrezidentFarmoni() {
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
          <Link className="back">Prezident Farmonlari</Link>
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
                <img src={farmon} alt="farmon" />
              </div>
              <div className="col-7 farmon_right-text">
                <p>
                  O'zbekiston Respublikasi Prezidentining 2022 yil 29 yanvardagi
                  "2022-2026 yillarga mo'ljallangan Yangi O'zbekistonning
                  taraqqiyot strategiyasi to'g'risida"gi PF-60-son farmoni.
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2022 yil 29 yanvardagi
                  "2022-2026 yillarga mo'ljallangan Yangi O'zbekistonning
                  taraqqiyot strategiyasi to'g'risida"gi PF-60-son farmoni.
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2022 yil 29 yanvardagi
                  "2022-2026 yillarga mo'ljallangan Yangi O'zbekistonning
                  taraqqiyot strategiyasi to'g'risida"gi PF-60-son farmoni.
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2021 yil 16 iyundagi
                  "Davlat organlari va tashkilotlarining faoliyati ochiqligini
                  ta'minlash, shuningdek, jamoatchilik nazoratini samarali
                  amalga oshirishga doir qo'shimcha chora-tadbirlar
                  to'g'risida"gi PF-6247-son farmoni. Prezidentining 2021 yil 16
                  iyundagi "Davlat organlari va tashkilotlarining faoliyati
                  ochiqligini ta'minlash, shuningdek, jamoatchilik nazoratini
                  samarali amalga oshirishga doir qo'shimcha chora-tadbirlar
                  to'g'risida"gi PF-6247-son farmoni
                </p>
              </div>
              <p>
                O'zbekiston Respublikasi Prezidentining 2021 yil 10 fevraldagi
                "Qonunchilik hujjatlari ijrosini samarali tashkil etishda davlat
                boshqaruvi organlari va mahalliy ijro etuvchi hokimiyat
                organlari rahbarlarining shaxsiy javobgarligini kuchaytirishga
                doir qo'shimcha chora-tadbirlar to'g'risida"gi PF-6166-son
                farmoni
              </p>
              <p>
                O'zbekiston Respublikasi Prezidentining 2021 yil 3 fevraldagi "
                2017 — 2021 yillarda O'zbekiston Respublikasini
                rivojlantirishning beshta ustuvor yo'nalishi bo'yicha harakatlar
                strategiyasini "yoshlarni qo'llab-quvvatlash va aholi
                salomatligini mustahkamlash yili"da amalga oshirishga oid davlat
                dasturi to'g'risida "gi PF-6155-son farmoni
              </p>
              <p>
                O'zbekiston Respublikasi Prezidentining 2020 yil 27 oktyabrdagi
                "Davlat ishtirokidagi korxonalarni isloh qilishni
                jadallashtirish hamda davlat aktivlarini xususiylashtirishga oid
                chora-tadbirlar to'g'risida"gi PF-6096-son farmoni
              </p>
              <p>
                O'zbekiston Respublikasi Prezidentining 2020 yil 30 oktyabrdagi
                "Sog'lom turmush tarzini keng tatbiq etish va ommaviy sportni
                yanada rivojlantirish chora-tadbirlari to'g'risidagi PF-6099-son
                farmoni
              </p>
              <p>
                O'zbekiston Respublikasi prezidenti 2020 yil 5 oktyabr"
                "O'zbekistonni raqamlash - 2030" tasdiqlangan strategiya va
                universitetga amalgaoshirish chora-tadbirlari-ko'rilgan
                chora-tadbirlar " gi PF-6079-son qarori
              </p>
              <p>
                O'zbekiston Respublikasi Prezidentining 2020 yil 18 avgustdagi
                "Respublikada eksport va investisiya salohiyatini yanada
                rivojlantirishga oid qo'shimcha chora-tadbirlar to'g'risida"gi
                PF-6042-son farmoni
              </p>
              <p>
                O'zbekiston Respublikasi Prezidentining 2020 yil 27 oktyabrdagi
                "Davlat ishtirokidagi korxonalarni isloh qilishni
                jadallashtirish hamda davlat aktivlarini xususiylashtirishga oid
                chora-tadbirlar to'g'risida"gi PF-6096-son farmoni
              </p>
              <p>
                O'zbekiston Respublikasi Prezidentining 2020 yil 30 oktyabrdagi
                "Sog'lom turmush tarzini keng tatbiq etish va ommaviy sportni
                yanada rivojlantirish chora-tadbirlari to'g'risidagi PF-6099-son
                farmoni
              </p>
              <p>
                O'zbekiston Respublikasi prezidenti 2020 yil 5 oktyabr"
                "O'zbekistonni raqamlash - 2030" tasdiqlangan strategiya va
                universitetga amalgaoshirish chora-tadbirlari-ko'rilgan
                chora-tadbirlar " gi PF-6079-son qarori
              </p>
            </div>
          </div>
        </div>
      </div>
      <PagenationWhite />
    </div>
  );
}

export default PrezidentFarmoni;

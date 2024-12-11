import React from "react";

import { Link } from "react-router-dom";
import banner from "../../images/img/minimg.png";
import yangilik from "../../images/img/new1.png"
import yangilik5 from "../../images/img/yangilik5.png"
import yangilik6 from "../../images/img/yangilik6.png"
function YangiliklarDetail() {
  return (
    <div>
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/" className="bosh">
              Bosh sahifa
            </Link>
            <Link to="/Yangiliklar" className="back">
              Yangiliklar
            </Link>
          </div>
          <div className="right">
            <Link>
              <i className="bi bi-arrow-left"></i> Orqaga
            </Link>
          </div>
        </div>

        <div className="banner-box">
          <div className="row">
            <div className="col-md-9">
              <div className="bannerimg">
                <img src={banner} alt="bannerimg" />
              </div>
              <div className="banner-body">
                <div className="banner-date">
                  <span>15.09.2023</span>
                </div>
                <h2>
                  Сhet eldagi diplomatik vakolatxonalar <br /> ham professional
                </h2>
                <p className="banner-text">
                  2023-yil 19-iyul kuni Oly ta’lim, fan va innovatsiyalar
                  vazirligi huzuridagi Pedagogik innovatsiyalar instituti va
                  “Qо‘qon mexanika zavodi” Aksiyadorlik jamiyati о‘rtasida
                  hamkorlik shartnomasi imzolandi. Unda Pedagogik
                  innovatsiyalar instituti va “Qо‘qon mexanika zavodi”
                  Aksiyadorlik jamiyati rahbar hamda mas’ul xodimlari ishtirok
                  etdi. Mazkur uchrashuv va shartnomaga kо‘ra, hamkorlikda
                  tegishli kasb va mutaxassisliklar hamda qisqa muddatli о‘quv
                  kurslari bо‘yicha ta’lim dasturlarini ishlab chiqish,
                  о‘quv-uslubiy ishlarni yо‘lga qо‘yish, о‘zaro tajriba
                  almashish, о‘quvchilarning ishlab chiqarish va diplom oldi
                  amaliyotlarini tashkil etish, maxsus fanlar о‘qituvchilari
                  va ishlab chiqarish ta’limi ustalarining amaliy
                  kо‘nikmalarini oshirish, ilmiy tadqiqot ishlarini yо‘lga
                  qо‘yish, qо‘shma innovatsion loyihalarni amalga oshirish
                  orqali professional ta’lim tizimini yanada rivojlantirishga
                  qaratilgan bir qator ishlarni amalga oshirishga kelishib
                  olindi.
                </p>
                <p className="banner-text">
                  Mazkur uchrashuv va shartnomaga kо‘ra, hamkorlikda tegishli
                  kasb va mutaxassisliklar hamda qisqa muddatli о‘quv kurslari
                  bо‘yicha ta’lim dasturlarini ishlab chiqish, о‘quv-uslubiy
                  ishlarni yо‘lga qо‘yish, о‘zaro tajriba almashish,
                  о‘quvchilarning ishlab chiqarish va diplom oldi
                  amaliyotlarini tashkil etish, maxsus fanlar о‘qituvchilari
                  va ishlab chiqarish ta’limi ustalarining amaliy
                  kо‘nikmalarini oshirish, ilmiy tadqiqot ishlarini yо‘lga
                  qо‘yish, qо‘shma innovatsion loyihalarni amalga oshirish
                  orqali professional ta’lim tizimini yanada rivojlantirishga
                  qaratilgan bir qator ishlarni amalga oshirishga kelishib
                  olindi.
                </p>
              </div>
            </div>
            <div className="col-md-3 banner-right">
              <h3>Yangiliklar va e’lonlar</h3>
              <div className="banner-cards">
                <div className="banner-card">
                  <div className="banner-card-img">
                    <img src={yangilik} alt="yangilik" />
                  </div>
                  <div className="banner-card-box">
                    <div className="banner-date">
                      <span>15.09.2023</span>
                    </div>
                    <div className="banner-card-day">
                      <span>2-kun oldin</span>
                    </div>
                    <div className="banner-card-name">
                      <Link>Pedagogik innovatsiyalar instituti va O‘zbekiston Respublikasi</Link>
                    </div>
                  </div>
                </div>
                <div className="banner-card">
                  <div className="banner-card-img">
                    <img src={yangilik5} alt="yangilik" />
                  </div>
                  <div className="banner-card-box">
                    <div className="banner-date">
                      <span>15.09.2023</span>
                    </div>
                    <div className="banner-card-day">
                      <span>2-kun oldin</span>
                    </div>
                    <div className="banner-card-name">
                      <Link>GIZ “TexVET” loyihasi hamkorlarining muvofiqlashtiruvchi</Link>
                    </div>
                  </div>
                </div>
                <div className="banner-card">
                  <div className="banner-card-img">
                    <img src={yangilik6} alt="yangilik" />
                  </div>
                  <div className="banner-card-box">
                    <div className="banner-date">
                      <span>15.09.2023</span>
                    </div>
                    <div className="banner-card-day">
                      <span>2-kun oldin</span>
                    </div>
                    <div className="banner-card-name">
                      <Link>Germaniya bilan hamkorlikda yengil sanoat yo‘nalishida kadrlar</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default YangiliklarDetail;

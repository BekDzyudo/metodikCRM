import React from "react";
import javohir from "../../../images/img/javohir.png"
import img1 from "../../../images/img/metodists/dilfuza opa.png"
import img2 from "../../../images/img/metodists/dilorom opa.png"
import img3 from "../../../images/img/metodists/komila opa.png"
import img4 from "../../../images/img/metodists/mirjalol.png"
import img5 from "../../../images/img/metodists/nargiza opa.png"
import img6 from "../../../images/img/metodists/ravshan.png"
import img7 from "../../../images/img/metodists/shaxzoda opa.png"
import "./Mutaxassis.css";

import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

function Mutaxassis() {
  return (
    <div className="mutaxasis">
        <div className="mutaxasis_top">
          <h1>Bizning mutaxassislar</h1>
        </div>
        <div className="row">
          <Swiper
          className="mutaxasis_users"
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={false}
           slidesPerView={"auto"}
           loop={true}
           coverflowEffect={{
             rotate: 0,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows: false,
           }}
           pagination={true}
           modules={[EffectCoverflow, Pagination]}
          //  autoplay={{ delay: 2000, disableOnInteraction: false }}
           >
            <SwiperSlide className="mutaxasis_user">
              <div className="mutaxasis_img">
                <img src={javohir} alt="" />
              </div>
              <div className="mutaxasis_user-name">
                <p>Otayorov Javohir <br /> Odiljon o‘g‘li</p>
                <p>Bosh mutaxassis</p>
                <span>
                Ta'lim texnologiyalari, o‘quv reja va dasturlarini ishlab chiqish bo‘limi
                </span>
                <div className="btns">
                  <div>
                    <IoMdMail style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>otayorovjavohir123@gmail.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>+998 93 123 45 67</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mutaxasis_user">
              <div className="mutaxasis_img">
                <img src={img1} alt="" />
              </div>
              <div className="mutaxasis_user-name">
                <p>Tashmuxamedova Dilfuza<br /> Utkurovna</p>
                <p>Bosh mutaxassis</p>
                <span>
                Professional ta’limni o‘quv-metodik ta’minlash bo‘limi
                </span>
                <div className="btns">
                  <div>
                    <IoMdMail style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>toshmuxamedovadilfuza123@gmail.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>+998 93 123 45 67</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mutaxasis_user">
              <div className="mutaxasis_img">
                <img src={img2} alt="" />
              </div>
              <div className="mutaxasis_user-name">
                <p>Atajanova Dilorom <br /> Bekdurdievna</p>
                <p>Bosh mutaxassis</p>
                <span>
                Professional ta'limni o‘quv-metodik ta'minlash bo‘limi
                </span>
                <div className="btns">
                  <div>
                    <IoMdMail style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>atajanovadilorom123@gmail.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>+998 93 123 45 67</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mutaxasis_user">
              <div className="mutaxasis_img">
                <img src={img3} alt="" />
              </div>
              <div className="mutaxasis_user-name">
                <p>Turganova Komila <br /> Islamovna</p>
                <p>Bosh mutaxassis</p>
                <span>
                Professional ta'limni innovasion rivojlantirish boshqarmasi
                </span>
                <div className="btns">
                  <div>
                    <IoMdMail style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>turganovakomila123@gmail.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>+998 93 123 45 67</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mutaxasis_user">
              <div className="mutaxasis_img">
                <img src={img4} alt="" />
              </div>
              <div className="mutaxasis_user-name">
                <p>Ubaydullaev Mirjalol<br /> Baxodir o‘g‘li</p>
                <p>Bosh mutaxassis</p>
                <span>
                Ta'lim texnologiyalari, o‘quv reja va dasturlarini ishlab chiqish bo‘limi
                </span>
                <div className="btns">
                  <div>
                    <IoMdMail style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>ubaydullayevmirjalol123@gmail.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>+998 93 123 45 67</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mutaxasis_user">
              <div className="mutaxasis_img">
                <img src={img5} alt="" />
              </div>
              <div className="mutaxasis_user-name">
                <p>Yakubova Nargiz <br /> Mirzaxamedovna</p>
                <p>Bosh mutaxassis</p>
                <span>
                Professional ta'limni innovasion rivojlantirish boshqarmasi
                </span>
                <div className="btns">
                  <div>
                    <IoMdMail style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>yakubovanargiz123@gmail.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>+998 93 123 45 67</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mutaxasis_user">
              <div className="mutaxasis_img">
                <img src={img6} alt="" />
              </div>
              <div className="mutaxasis_user-name">
                <p>Botirov Ravshan <br /> Maxkam o‘g‘li</p>
                <p>Bosh mutaxassis</p>
                <span>
                Ta'lim texnologiyalari, o‘quv reja va dasturlarini ishlab chiqish bo‘limi
                </span>
                <div className="btns">
                  <div>
                    <IoMdMail style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>botirovravshan123@gmail.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>+998 93 123 45 67</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mutaxasis_user">
              <div className="mutaxasis_img">
                <img src={img7} alt="" />
              </div>
              <div className="mutaxasis_user-name">
                <p>Shukurova Shayxzoda<br />Kamaritdinovna</p>
                <p>Bosh mutaxassis</p>
                <span>
                Professional ta’limni o‘quv-metodik ta’minlash bo‘limi
                </span>
                <div className="btns">
                  <div>
                    <IoMdMail style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>shukurovashayxzoda123@gmail.com</span>
                  </div>
                  <div>
                    <FaPhoneAlt style={{fontSize:"16px", color:"rgb(14,90,167)"}}/>
                    <span>+998 93 123 45 67</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  );
}

export default Mutaxassis;

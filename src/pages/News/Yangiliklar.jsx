import React from "react";
import { Link } from "react-router-dom";
import minimg from "../../images/img/minimg.png";
import imaGe1 from "../../images/img/new1.png";
import "./Yangiliklar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Yangiliklar() {
  return (
    <div>
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/" className="bosh">
              Bosh sahifa
            </Link>
            <Link to="/Yangilik" className="back">
              Yangiliklar
            </Link>
          </div>
          <div className="right">
            <Link>
              <i className="bi bi-arrow-left"></i> Orqaga
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mindos">
              <div className="col-7">
                <div className="minimg">
                  <img src={minimg} alt="rasm" />
                </div>
              </div>
              <div className="col-5">
                <div className="mindostext">
                  <>
                    <div className="frame">
                      <p>15.09.2023</p>
                    </div>
                    <p className="titlemind">
                      Сhet eldagi diplomatik vakolatxonalar ham professional
                    </p>
                    <p className="titlemini">
                      2023-yil 19-iyul kuni Oly ta’lim, fan va innovatsiyalar
                      vazirligi huzuridagi Pedagogik innovatsiyalar instituti va
                      “Qо‘qon mexanika zavodi” Aksiyadorlik jamiyati о‘rtasida
                      hamkorlik shartnomasi imzolandi. Unda Pedagogik
                      innovatsiyalar instituti va “Qо‘qon mexanika zavodi”
                      Aksiyadorlik jamiyati rahbar hamda mas’ul xodimlari
                      ishtirok etdi. Mazkur uchrashuv va shartnomaga kо‘ra,
                      hamkorlikda tegishli kasb va mutaxassisliklar hamda qisqa
                      muddatli о‘quv kurslari bо‘yicha ta’lim dasturlarini
                      ishlab chiqish, о‘quv-uslubiy ishlarni yо‘lga qо‘yish,
                      о‘zaro tajriba almashish, о‘quvchilarning ishlab chiqarish
                      va diplom oldi amaliyotlarini tashkil etish, maxsus fanlar
                      о‘qituvchilari va ishlab chiqarish ta’limi ustalarining
                      amaliy kо‘nikmalarini oshirish, ilmiy tadqiqot ishlarini
                      yо‘lga qо‘yish, qо‘shma innovatsion loyihalarni amalga
                      oshirish orqali professional ta’lim tizimini yanada
                      rivojlantirishga qaratilgan bir qator ishlarni amalga
                      oshirishga kelishib olindi.
                    </p>
                  </>
                  <button className="mindbtn">
                    <Link to="/Yangiliklar/yangilik-detail">Batafsil</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="maintitle">
          <p>Yangiliklar va e’lonlar</p>
        </div>
      </div>

      <section className="my-5">
        <div className="container">
          <div className="row mx-auto my-auto justify-content-center">
            <div className="col">
              <div className="row">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination, A11y]}
                  pagination={{ clickable: false }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={0}
                  slidesPerView={5}
                  navigation
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <Link to="/Yangiliklar/yangilik-detail">
                      <figure className="snip1527">
                        <div className="image">
                          <img src={imaGe1} alt="pr-sample23" />
                        </div>
                        <figcaption>
                          <div className="date">
                            <span className="day">28</span>
                            <span className="month">Oct</span>
                          </div>

                          <h5>Pedagogik innovatsiyalar instituti</h5>
                          <p>
                            Pedagogik innovatsiyalar instituti va O‘zbekiston
                            Respublikasi nogironlar jamiyati o‘rtasida hamkorlik
                          </p>
                        </figcaption>

                      </figure>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to="/Yangiliklar/yangilik-detail">
                      <figure className="snip1527">
                        <div className="image">
                          <img src={imaGe1} alt="pr-sample23" />
                        </div>
                        <figcaption>
                          <div className="date">
                            <span className="day">28</span>
                            <span className="month">Oct</span>
                          </div>

                          <h5>Pedagogik innovatsiyalar instituti</h5>
                          <p>
                            Pedagogik innovatsiyalar instituti va O‘zbekiston
                            Respublikasi nogironlar jamiyati o‘rtasida hamkorlik
                          </p>
                        </figcaption>

                      </figure>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to="/Yangiliklar/yangilik-detail">
                      <figure className="snip1527">
                        <div className="image">
                          <img src={imaGe1} alt="pr-sample23" />
                        </div>
                        <figcaption>
                          <div className="date">
                            <span className="day">28</span>
                            <span className="month">Oct</span>
                          </div>

                          <h5>Pedagogik innovatsiyalar instituti</h5>
                          <p>
                            Pedagogik innovatsiyalar instituti va O‘zbekiston
                            Respublikasi nogironlar jamiyati o‘rtasida hamkorlik
                          </p>
                        </figcaption>
                      </figure>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to="/Yangiliklar/yangilik-detail">
                      <figure className="snip1527">
                        <div className="image">
                          <img src={imaGe1} alt="pr-sample23" />
                        </div>
                        <figcaption>
                          <div className="date">
                            <span className="day">28</span>
                            <span className="month">Oct</span>
                          </div>

                          <h5>Pedagogik innovatsiyalar instituti</h5>
                          <p>
                            Pedagogik innovatsiyalar instituti va O‘zbekiston
                            Respublikasi nogironlar jamiyati o‘rtasida hamkorlik
                          </p>
                        </figcaption>
                      </figure>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to="/Yangiliklar/yangilik-detail">
                      <figure className="snip1527">
                        <div className="image">
                          <img src={imaGe1} alt="pr-sample23" />
                        </div>
                        <figcaption>
                          <div className="date">
                            <span className="day">28</span>
                            <span className="month">Oct</span>
                          </div>

                          <h5>Pedagogik innovatsiyalar instituti</h5>
                          <p>
                            Pedagogik innovatsiyalar instituti va O‘zbekiston
                            Respublikasi nogironlar jamiyati o‘rtasida hamkorlik
                          </p>
                        </figcaption>
                      </figure>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to="/Yangiliklar/yangilik-detail">
                      <figure className="snip1527">
                        <div className="image">
                          <img src={imaGe1} alt="pr-sample23" />
                        </div>
                        <figcaption>
                          <div className="date">
                            <span className="day">28</span>
                            <span className="month">Oct</span>
                          </div>
                          <h5>Pedagogik innovatsiyalar instituti</h5>
                          <p>
                            Pedagogik innovatsiyalar instituti va O‘zbekiston
                            Respublikasi nogironlar jamiyati o‘rtasida hamkorlik
                          </p>
                        </figcaption>
                      </figure>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to="/Yangiliklar/yangilik-detail">
                      <figure className="snip1527">
                        <div className="image">
                          <img src={imaGe1} alt="pr-sample23" />
                        </div>
                        <figcaption>
                          <div className="date">
                            <span className="day">28</span>
                            <span className="month">Oct</span>
                          </div>
                          <h5>Pedagogik innovatsiyalar instituti</h5>
                          <p>
                            Pedagogik innovatsiyalar instituti va O‘zbekiston
                            Respublikasi nogironlar jamiyati o‘rtasida hamkorlik
                          </p>
                        </figcaption>
                      </figure>
                    </Link>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Yangiliklar;

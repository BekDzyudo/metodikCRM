import React from "react";

import "./Loyiha.css";
import qiz from "../../../images/img/qiz.png";
function Loyiha() {
  return (
    <div className="loyiha">
      <div className="container ">
        <div className="row">
          <div className="col-12 loyiha_box">
            <div className="col-6">
              <h1 className="loyiha_title">Loyiha haqida</h1>
              <p className="loyiha_text">
                Ushbu axborot tizimi Pedagogik innovatsiyalar, kasb-hunar
                taʼlimi boshqaruv hamda pedagog kadrlarni qayta tayyorlash va
                ularning malakasini oshirish instituti Professional ta’limni
                raqamlashtirish laboratoriyasi tomonidan ishlab chiqilgan
                boʼlib, professional taʼlim muassasalari uchun metodik
                ta’minotni amalga oshiradi.
              </p>
            </div>
            <div className="col-6">
              <div className="loyiha_img">
                <img src={qiz} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loyiha;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import hudud from "../../../images/img/hudud.jpg";

function BoshlangichTalim() {
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(-1);
  function handleActive(index) {
    setActive(index);
  }
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/raqamli-talim-resurslari" className="bosh">
            Raqamli ta'lim resurslari
          </Link>
        </div>
      </div>
      <div className="block row">
          <div className="sidebar col-3">
            <button
              onClick={() => {
                setCategory("");
                handleActive(-1);
              }}
              className={active == -1 ? "isActive" : "malumot_card"}
            >
              <p>Barchasi</p>
            </button>
            <button className="malumot_card">
              <p>Umum ta'lim fanlar</p>
            </button>
          </div>
        <div className="content col-9">
          <div className="card">
            <div className="image">
              <img src={hudud} alt="" />
            </div>
            <div className="data">
            <h2 className="title">SHAXSIY KOMPYUTER VA OFIS QURILMALARIGA...</h2>
            <p className="desc">3.52.01.01 - Raqamli axborotlarni qayta ishlash ustasi kasbi bo‘yicha</p>
            <div className="btns">
              <div>
                <span>icon</span>
                <span>15</span>
              </div>
              <div>
                <span>icon</span>
                <span>500</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoshlangichTalim;

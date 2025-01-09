import React from "react";
import { Link } from "react-router-dom";
import hudud from "../../images/img/hudud.jpg";

function RTRHome() {
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/raqamli-talim-resurslari" className="bosh">
            Raqamli ta'lim resurslari
          </Link>
        </div>
      </div>
      <div className="rtrHomeRow">
        <Link to="boshlangich-professional-talim" className="card">
          <div className="image">
            <img src={hudud} alt="" />
          </div>
          <h2>Boshlang'ich <br /> professional ta'lim</h2>
        </Link>
        <Link to="orta-professional-talim" className="card">
          <div className="image">
            <img src={hudud} alt="" />
          </div>
          <h2>O'rta professional ta'lim</h2>
        </Link>
        <Link to="orta-maxsus-professional-talim" className="card">
          <div className="image">
            <img src={hudud} alt="" />
          </div>
          <h2>O'rta maxsus <br /> professional ta'lim</h2>
        </Link>
      </div>
    </div>
  );
}

export default RTRHome;

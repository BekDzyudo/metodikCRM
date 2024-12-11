import React from "react";

import "./Statistika.css";

function Statistika() {
  return (
    <div className="statistika">
      <div className="container">
        <div className="row">
          <div className="col-12 statistika_box">
            <div className="son">
              <span className="count">820</span>
              <p>O‘quv me'yoriy hujjatlar</p>
            </div>
            <div className="son">
              <span className="count">519</span>
              <p>O‘quv adabiyotlar</p>
            </div>
            <div className="son">
              <span className="count">507</span>
              <p>O‘qitish materiallari to‘plami</p>
            </div>
            <div className="son">
              <span className="count">203</span>
              <p>Qisqa muddatli kurslar</p>
            </div>
            <div className="son">
              <span className="count">17671</span>
              <p>Foydalanuvchilar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistika;

import React from "react";

import "./Statistika.css";
import CountUp from "react-countup";

function Statistika() {

  return (
    <div className="statistika">
      <div className="container">
        <div className="row">
          <div className="col-12 statistika_box">
            <div className="son">
              <span className="count">
                <CountUp
                start={0}
                end={450}
                duration={2}
                ></CountUp>
              </span>
              <p>O‘quv me'yoriy hujjatlar</p>
            </div>
            <div className="son">
            <span className="count">
                <CountUp
                start={0}
                end={519}
                duration={2}
                ></CountUp>
              </span>
              <p>O‘quv adabiyotlar</p>
            </div>
            <div className="son">
            <span className="count">
                <CountUp
                start={0}
                end={220}
                duration={2}
                ></CountUp>
              </span>
              <p>O‘qitish materiallari to‘plami</p>
            </div>
            <div className="son">
            <span className="count">
                <CountUp
                start={0}
                end={137}
                duration={2}
                ></CountUp>
              </span>
              <p>Qisqa muddatli kurslar</p>
            </div>
            <div className="son">
            <span className="count">
                <CountUp
                start={0}
                end={2590}
                duration={2}
                ></CountUp>
              </span>
              <p>Foydalanuvchilar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistika;

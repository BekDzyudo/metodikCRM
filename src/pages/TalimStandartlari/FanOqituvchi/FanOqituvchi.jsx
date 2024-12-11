import React from "react";

import { Link } from "react-router-dom";

import telba from "../../../images/img/telba.jpg";
import "./FanOqituvchi.css";

function FanOqituvchi() {
  return (
    <div>
  
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/" className="bosh">
              Bosh sahifa
            </Link>
            <Link to="/Talim" className="back">
              Fan o'qituvchilari
            </Link>
          </div>
          <div className="right">
            <Link>
              <i className="bi bi-arrow-left"></i> Orqaga
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="talim_searchs">
            <div className="talim_search">
              <i className="bi bi-search"></i>
              <input type="search" placeholder="izlash" />
            </div>
            <div className="fanoqituvchi_title">
              <h4>Fan o'qituvchilari</h4>
            </div>
          </div>
          <div className="col-12 fanoqituvchi">
            <div className="col-3">
              <div className="oquvamaliyot_menu">
                <ul>
                  <li>
                    <Link>Texnikaviy chizmachilik</Link>
                  </li>
                  <li>
                    <Link>Elektrotexnika va elektronika asoslari</Link>
                  </li>
                  <li>
                    <Link>Konstruktsion materiallar</Link>
                  </li>
                  <li>
                    <Link>
                      Issiqlik texnikasi nazariy asoslari va issiqlik elektr
                      stantsiyalari
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Issiqlik texnikasi nazariy asoslari va issiqlik elektr
                      stantsiyalari
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="table">
                <div className="table_top">
                  <div className="table_title">
                    <h5>Fan o'qituvchilari</h5>
                    <span>O'qituvchilar 400 soni</span>
                  </div>
                  <div className="table_search">
                    <i className="bi bi-search"></i>
                    <input type="search" placeholder="F.I.SH" />
                  </div>
                </div>
                <div className="table_box">
                  <table>
                    <tr className="gray">
                      <th className="qora">O'qituvchi</th>
                      <th>Material soni</th>
                      <th>fan yo'nalishi</th>
                      <th>Reyting</th>
                      <th>Materialni yuklab olish</th>
                    </tr>
                    <tbody>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>

                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="d_flex">
                          <div className="table_img">
                            <img src={telba} alt="" />
                          </div>
                          Brad Simmons
                        </td>
                        <td>65</td>
                        <td>Texnikaviy chizmachilik</td>
                        <td className="lightgreen">1000</td>
                        <td>
                          <Link>Yuklab olish</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default FanOqituvchi;

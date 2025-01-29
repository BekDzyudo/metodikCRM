import React, { useContext, useState } from "react";
import { PortfolioContext } from "./contexts/editPortfolioContext";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";

export function TeacherFiles() {

    const {setAddHujjat } =
      useContext(PortfolioContext);
  
  const [isActivesohasi, setIsActivesohasi] = useState(false);
  const [selectedsohasi, setIsSelectedsohasi] = useState("Qaytarilgan");

  return (
       <div className="document_new">
              <div className="jadval_top">
                <div className="jadval_name">
                  <h4>Materiallarni qo‘shish</h4>
                </div>
                <div
                  className="hujjat_turi"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <p> Hujjat turi:</p>
                  <div className="select_field">
                    <div className="dropdown">
                      <div
                        onClick={(e) => {
                          setIsActivesohasi(!isActivesohasi);
                        }}
                        className="select_dropdown-btn"
                      >
                        {selectedsohasi}
                        <span
                          className={
                            isActivesohasi ? "fas fa-caret-up" : "fas fa-caret-down"
                          }
                        />
                      </div>
                      <div
                        className="dropdown-content"
                        style={{ display: isActivesohasi ? "block" : "none" }}
                      >
                        <div
                          onClick={(e) => {
                            setIsSelectedsohasi(e.target.textContent);
                            setIsActivesohasi(!isActivesohasi);
                          }}
                          className="item"
                        >
                          Yangi
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelectedsohasi(e.target.textContent);
                            setIsActivesohasi(!isActivesohasi);
                          }}
                        >
                          Tasdiqlangan
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelectedsohasi(e.target.textContent);
                            setIsActivesohasi(!isActivesohasi);
                          }}
                        >
                          Rad erilgan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setAddHujjat(true)}
                  className="addPortfolioBtn"
                >
                  + Hujjat qushish
                </button>
              </div>
              <hr />
              <div className="document_table">
                <table className="table">
                  <thead className="table-header">
                    <tr>
                      <th>№</th>
                      <th>Jo'natuvchi hudud</th>
                      <th>Jo'natuvchi</th>
                      <th>Hujjatning yaratilgan sanasi</th>
                      <th>Hujjat raqami</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tr>
                    <td>1</td>
                    <td>Samarqand shaxar, Bulung'ur tumani kasb-hunar maktabi</td>
                    <td>Alimuxamedova Dilnoza Muxameddova</td>
                    <td className="new">
                      <b>02.08.2020</b>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                        >
                          <circle cx="3" cy="3" r="3" fill="white" />
                        </svg>{" "}
                        Yangi
                      </p>
                    </td>
                    <td>
                      <b>№65848489894</b>
                    </td>
                    <td>
                      <Link to="/Document/IncomingDocumentDetail">Ko'rish</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Samarqand shaxar, Bulung'ur tumani kasb-hunar maktabi</td>
                    <td>Alimuxamedova Dilnoza Muxameddova</td>
                    <td className="new">
                      <b>02.08.2020</b>
                      <p className="rad">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                        >
                          <circle cx="3" cy="3" r="3" fill="white" />
                        </svg>{" "}
                        Rad etildi
                      </p>
                    </td>
                    <td>
                      <b>№65848489894</b>
                    </td>
                    <td>
                      <Link to="/Document/ReturnedDocumentDetail">Ko'rish</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Samarqand shaxar, Bulung'ur tumani kasb-hunar maktabi</td>
                    <td>Alimuxamedova Dilnoza Muxameddova</td>
                    <td className="new">
                      <b>02.08.2020</b>
                      <p className="tasdiq">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                        >
                          <circle cx="3" cy="3" r="3" fill="white" />
                        </svg>{" "}
                        Tasdiqlangan
                      </p>
                    </td>
                    <td>
                      <b>№65848489894</b>
                    </td>
                    <td>
                      <Link to="/Document/ApprovedDocumentDetail">Ko'rish</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Samarqand shaxar, Bulung'ur tumani kasb-hunar maktabi</td>
                    <td>Alimuxamedova Dilnoza Muxameddova</td>
                    <td className="new">
                      <b>02.08.2020</b>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                        >
                          <circle cx="3" cy="3" r="3" fill="white" />
                        </svg>{" "}
                        Yangi
                      </p>
                    </td>
                    <td>
                      <b>№65848489894</b>
                    </td>
                    <td>
                      <Link>Ko'rish</Link>
                    </td>
                  </tr>
                </table>
                {/* <Pagination count={10} color="primary"></Pagination> */}
              </div>
            </div>
  );
}

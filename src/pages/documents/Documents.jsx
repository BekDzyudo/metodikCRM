import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./documents.css";
import { Pagination } from "@mui/material";
import { FiHome } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";
import useGetFetchProfil from "../../hooks/useGetFetchProfil";
import { MdNavigateNext } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthContext";

export default function Documents() {
  const [isActivesohasi, setIsActivesohasi] = useState(false);
  const [selectedsohasi, setIsSelectedsohasi] = useState("Ta’lim sohasi");

  const [isActiveyonalish, setIsActiveyonalish] = useState(false);
  const [selectedyonalish, setIsSelectedyonalish] =
    useState("Ta’lim yo‘nalish");

  const { userData } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }

  const { data: Materiallar } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/birlashma/metodist/${
      userData?.userId
    }/?page=${page}`
  );

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/" className="bosh">
            Bosh sahifa
          </Link>
          <Link to="/Document/documents" className="back">
            Hujjatlar
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="document_box">
            <div className="col-3">
              <div className="document_left">
                <ul className="document_left-top">
                  <li className="active">
                    <Link>
                      <FiHome
                        style={{
                          width: "22px",
                          height: "22px",
                          color: "#868e97",
                        }}
                      />
                      Asosiy
                    </Link>
                  </li>
                  <li>
                    <Link to="/Document/IncomingDocuments">
                      <FiDownload
                        style={{
                          width: "22px",
                          height: "22px",
                          color: "#868e97",
                        }}
                      />
                      Kiruvchi hujjatlar
                    </Link>
                  </li>
                  <li>
                    <Link to="/Document/ReturnedDocument">
                      <FiUpload
                        style={{
                          width: "22px",
                          height: "22px",
                          color: "#868e97",
                        }}
                      />
                      Qaytgan hujjatlar
                    </Link>
                  </li>
                  <li>
                    <Link to="/Document/ApprovedDocument">
                      <FiCheckSquare
                        style={{
                          width: "22px",
                          height: "22px",
                          color: "#868e97",
                        }}
                      />
                      Tasdiqlangan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9 bordertop">
              <div className="document_cards">
                <div className="col-4">
                  <div className="document_card">
                    <div className="document_card-title">
                      <p>Yangi kelgan materiallar</p>
                      <h4>{Materiallar?.results?.yangi_materiallar_soni}</h4>
                    </div>
                    <div className="single-chart">
                      <svg viewBox="0 0 36 36" className="circular-chart kok">
                        <path
                          className="circle-bg"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="circle"
                          strokeDasharray={`${Math.round(
                            Materiallar?.results?.yangi_materiallar_foizi
                          )},100`}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x={18} y="20.35" className="percentage">
                          {Math.round(
                            Materiallar?.results?.yangi_materiallar_foizi
                          )}{" "}
                          %
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="document_card">
                    <div className="document_card-title">
                      <p>Tasdiqlangan materiallar</p>
                      <h4>
                        {Materiallar?.results?.tasdiqlangan_materiallar_soni}
                      </h4>
                    </div>
                    <div className="single-chart">
                      <svg
                        viewBox="0 0 36 36"
                        className="circular-chart yashil"
                      >
                        <path
                          className="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="circle"
                          strokeDasharray={`${Math.round(
                            Materiallar?.results?.tasdiqlangan_materiallar_foizi
                          )},100`}
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage">
                          {Math.round(
                            Materiallar?.results?.tasdiqlangan_materiallar_foizi
                          )}{" "}
                          %
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="document_card">
                    <div className="document_card-title">
                      <p>Qaytarilgan materiallar</p>
                      <h4>
                        {Materiallar?.results?.bekor_qilingan_materiallar_soni}
                      </h4>
                    </div>
                    <div className="single-chart">
                      <svg
                        viewBox="0 0 36 36"
                        className="circular-chart apelsin"
                      >
                        <path
                          className="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="circle"
                          strokeDasharray={`${Math.round(
                            Materiallar?.results
                              ?.bekor_qilingan_materiallar_foizi
                          )},100`}
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage">
                          {Math.round(
                            Materiallar?.results
                              ?.bekor_qilingan_materiallar_foizi
                          )}{" "}
                          %
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="selects_box">
                <h4>Ta'lim sohasini tanlash</h4>
                <div className="select_fields">
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
                            isActivesohasi
                              ? "fas fa-caret-up"
                              : "fas fa-caret-down"
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
                          Jurnalistika va ijtimoiy axborot-2021
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelectedsohasi(e.target.textContent);
                            setIsActivesohasi(!isActivesohasi);
                          }}
                        >
                          Biznes va boshqaruv-2021
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelectedsohasi(e.target.textContent);
                            setIsActivesohasi(!isActivesohasi);
                          }}
                        >
                          Huquq-2021
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="select_field">
                    <div className="dropdown">
                      <div
                        onClick={(e) => {
                          setIsActiveyonalish(!isActiveyonalish);
                        }}
                        className="select_dropdown-btn"
                      >
                        {selectedyonalish}
                        <span
                          className={
                            isActiveyonalish
                              ? "fas fa-caret-up"
                              : "fas fa-caret-down"
                          }
                        />
                      </div>
                      <div
                        className="dropdown-content"
                        style={{ display: isActiveyonalish ? "block" : "none" }}
                      >
                        <div
                          onClick={(e) => {
                            setIsSelectedyonalish(e.target.textContent);
                            setIsActiveyonalish(!isActiveyonalish);
                          }}
                          className="item"
                        >
                          Jurnalistika va ijtimoiy axborot-2021
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelectedyonalish(e.target.textContent);
                            setIsActiveyonalish(!isActiveyonalish);
                          }}
                        >
                          Biznes va boshqaruv-2021
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelectedyonalish(e.target.textContent);
                            setIsActiveyonalish(!isActiveyonalish);
                          }}
                        >
                          Huquq-2021
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="select_btn">Saqlash</button>
                </div>
              </div> */}
              <div className="document_new">
                <h4>Barcha materiallar</h4>
                <span className="document_incoming">Materiallar soni</span>
                <span className="document_new-nomer">{Materiallar?.total}</span>
                <hr />
                {Materiallar?.results?.result && (
                  <div className="document_table">
                    <table className="table">
                      <thead className="table-header">
                        <tr>
                          <th>№</th>
                          <th>Fan nomi</th>
                          <th>Material turi</th>
                          <th>Holati</th>
                          <th>Materialni ko'rish</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Materiallar.results.result.map((item, index) => {
                          return (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              <td>{item.fan?.name}</td>
                              <td>{item.kategoriya_material?.name}</td>
                              <td className="new">
                                {item.holat == "yangi" && (
                                  <button className="neww">Yangi</button>
                                )}
                                {item.holat == "rad_etildi" && (
                                  <button className="otkaz">Rad etildi</button>
                                )}
                                {item.holat == "tasdiqlandi" && (
                                  <button className="success">
                                    Tasdiqlandi
                                  </button>
                                )}

                                <p>
                                  {new Date(item.created_at).getDate() < 10
                                    ? "0" + new Date(item.created_at).getDate()
                                    : new Date(item.created_at).getDate()}
                                  .
                                  {new Date(item.created_at).getMonth() + 1 < 10
                                    ? "0" +
                                      (new Date(item.created_at).getMonth() + 1)
                                    : new Date(item.created_at).getMonth() + 1}
                                  .{new Date(item.created_at).getFullYear()}
                                </p>
                              </td>
                              <td className="muhokama">
                                <Link
                                  to={`/Document/DocumentDetail/${item.id}`}
                                >
                                  Muhokama
                                  <MdNavigateNext
                                    style={{ fontSize: "16px" }}
                                  />
                                  {item.count_not_read > 0 &&
                                    item.count_not_read < 10 && (
                                      <span
                                        className="count"
                                        style={{
                                          position: "absolute",
                                          top: "0px",
                                          right: "0px",
                                          background: "red",
                                          padding: "0px 8px",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <span
                                          style={{
                                            color: "white",
                                            fontSize: "13px",
                                          }}
                                        >
                                          {item.count_not_read}
                                        </span>
                                      </span>
                                    )}
                                  {item.count_not_read > 9 && (
                                    <span
                                      className="count"
                                      style={{
                                        position: "absolute",
                                        top: "0px",
                                        right: "0px",
                                        background: "red",
                                        padding: "0px 8px",
                                        borderRadius: "15px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: "white",
                                          fontSize: "13px",
                                        }}
                                      >
                                        {item.count_not_read}
                                      </span>
                                    </span>
                                  )}
                                </Link>{" "}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {Materiallar?.total_pages > 1 && (
                      <Pagination
                        count={Materiallar?.total_pages}
                        color="primary"
                        onChange={handlePagination}
                      ></Pagination>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

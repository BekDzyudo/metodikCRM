import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import useGetFetchProfil from "../../hooks/useGetFetchProfil";
import { FiCheckSquare, FiDownload, FiHome, FiUpload } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";
import { MdNavigateNext } from "react-icons/md";

export default function IncomingDocuments() {
  const [isActivesohasi, setIsActivesohasi] = useState(false);
  const [selectedsohasi, setIsSelectedsohasi] = useState("Kiruvchi hudud");

  const { userData } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }

  const { data: Materiallar } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/birlashma/metodist/${
      userData?.userId
    }/?holat=yangi&&page=${page}`
  );

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/" className="bosh">
            Bosh sahifa
          </Link>
          <Link to="/Document/documents" className="bosh">
            Hujjatlar
          </Link>
          <Link to="/Document/IncomingDocuments" className="back">
            Kiruvchi Hujjatlar
          </Link>
        </div>
        <div className="right">
          <Link>
            <i className="bi bi-arrow-left-short"></i> Orqaga
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="document_box">
            <div className="col-3">
              <div className="document_left">
                <ul className="document_left-top">
                  <li>
                    <Link to="/Document/documents">
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
                  <li className="active">
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
              <div className="document_new">
                <div className="document_incoming-top">
                  <div>
                    <h4>Kiruvchi materiallar</h4>
                    <span className="document_incoming">Materiallar soni</span>
                    <span className="document_new-nomer">
                      {Materiallar?.total}
                    </span>
                  </div>
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
                          Toshkent shahar
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelectedsohasi(e.target.textContent);
                            setIsActivesohasi(!isActivesohasi);
                          }}
                        >
                          Samarqand shahar
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelectedsohasi(e.target.textContent);
                            setIsActivesohasi(!isActivesohasi);
                          }}
                        >
                          Andijon shahar
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="document_date">
                    <input type="date" />
                  </div>
                  <div className="document_search">
                    <input type="search" placeholder="izlash" />
                  </div>
                </div>
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
                          <th>Kommentariya</th>
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
                                  .{new Date(item.created_at).getMonth() + 1}.
                                  {new Date(item.created_at).getFullYear()}
                                </p>
                              </td>
                              <td>
                                <Link to="/Document/IncomingDocumentDetail">
                                  Chatga o'tish{" "}
                                  <MdNavigateNext
                                    style={{ fontSize: "16px" }}
                                  />
                                </Link>
                              </td>
                              <td>
                                <Link target="_blanck" to={item.file}>
                                  Ko'rish
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

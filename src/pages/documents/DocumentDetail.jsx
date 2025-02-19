import React from "react";
import { FiCheckSquare, FiDownload, FiHome, FiUpload } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import useGetFetchProfil from "../../hooks/useGetFetchProfil";
import Chat from "./chat/Chat";

export default function DocumentDetail() {
  const { id } = useParams();

  const { data: Material } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/birlashma/material-detail/${id}/`
  );
  console.log(Material);

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
            <i className="bi bi-arrow-left-short"></i>Orqaga
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="document_box">
            {Material?.holat && (
              <>
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
                      <li className={`${Material?.holat == "yangi" ? "active" : ""}`}>
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
                      <li className={`${Material?.holat == "rad_etildi" ? "active" : ""}`}>
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
                      <li className={`${Material?.holat == "tasdiqlandi" ? "active" : ""}`}>
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
                    {Material.holat == "yangi" && (
                      <span className="incoming_title">Kiruvchi material</span>
                    )}
                    {Material.holat == "rad_etildi" && (
                      <span className="incoming_title">Qaytgan material</span>
                    )}
                    {Material.holat == "tasdiqlandi" && (
                      <span className="incoming_title">
                        Tasdiqlangan material
                      </span>
                    )}
                    {Material.holat == "yangi" && (
                      <button className="neww">Yangi</button>
                    )}
                    {Material.holat == "rad_etildi" && (
                      <button className="otkaz">Rad etildi</button>
                    )}
                    {Material.holat == "tasdiqlandi" && (
                      <button className="success">Tasdiqlandi</button>
                    )}
                    <div className="incoming_bigbox">
                      <div className="incoming_area">
                        <div className="incoming_box">
                          <p>Jo'natuvchi hudud</p>
                          <span>
                            {Material?.teacher?.region?.name},
                            {Material?.teacher?.district?.name},
                            {Material?.teacher?.college?.name}
                          </span>
                        </div>
                        <div className="incoming_box">
                          <p>Yaratilgan sana</p>
                          <span>
                            {new Date(Material.created_at).getDate() < 10
                              ? "0" + new Date(Material.created_at).getDate()
                              : new Date(Material.created_at).getDate()}
                            .
                            {new Date(Material.created_at).getMonth() + 1 < 10
                              ? "0" +
                                (new Date(Material.created_at).getMonth() + 1)
                              : new Date(Material.created_at).getMonth() + 1}
                            .{new Date(Material.created_at).getFullYear()}
                          </span>
                        </div>
                        <div className="incoming_file">
                          <p>biriktirilgan fayl</p>
                          <span>
                            <span>{Material?.kategoriya_material?.name}:</span>

                            <Link target="blanck" to={Material.file}>
                              {" "}
                              <FiDownload
                                style={{
                                  width: "16",
                                  height: "16",
                                  marginRight: "3px",
                                }}
                              />{" "}
                              Yuklab olish
                            </Link>
                          </span>
                        </div>
                      </div>
                      <div className="incoming_name">
                        <div>
                          <div className="incoming_box">
                            <p className="incoming_name">Jo'natuvchi</p>
                            <span>
                              {Material?.teacher?.last_name +
                                " " +
                                Material?.teacher?.first_name}
                            </span>
                          </div>
                          <div className="incoming_box">
                            <p>FAN NOMI</p>
                            <span>{Material?.fan.name}</span>
                          </div>
                        </div>
                        <div className="incoming_buttons">
                          <div className="rejection">
                            <Link className="acceptance">qabul qilish</Link>
                            <button className="btn">rad etish</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="incoming_textarea">
                      <form action="#">
                        <p>
                          <label htmlFor="qisqa">Qisqa mazmuni</label>
                        </p>
                        <textarea id="qisqa"></textarea>
                        <div className="commentSendBtns">
                          <label htmlFor="myfile" style={{cursor:"pointer"}}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M17.8666 9.2081L10.2082 16.8664C9.27005 17.8046 7.99757 18.3317 6.67075 18.3317C5.34393 18.3317 4.07145 17.8046 3.13325 16.8664C2.19505 15.9282 1.66797 14.6558 1.66797 13.3289C1.66797 12.0021 2.19505 10.7296 3.13325 9.79144L10.7916 2.1331C11.4171 1.50763 12.2654 1.15625 13.1499 1.15625C14.0345 1.15625 14.8828 1.50763 15.5082 2.1331C16.1337 2.75857 16.4851 3.60689 16.4851 4.49144C16.4851 5.37598 16.1337 6.2243 15.5082 6.84977L7.84158 14.5081C7.52885 14.8208 7.10469 14.9965 6.66242 14.9965C6.22014 14.9965 5.79598 14.8208 5.48325 14.5081C5.17051 14.1954 4.99482 13.7712 4.99482 13.3289C4.99482 12.8867 5.17051 12.4625 5.48325 12.1498L12.5582 5.0831"
                              stroke="#2E94F1"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>{" "}
                          </label>
                        <input type="file" id="myfile"/>
                        <button type="button" className="commentSend">Yuborish</button>
                      </div>
                      </form>
                      
                    </div>
                    <Chat userData={Material?.teacher}/>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

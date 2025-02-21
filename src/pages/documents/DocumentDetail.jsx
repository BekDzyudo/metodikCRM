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
                    <Chat userData={Material?.teacher} muhokama={Material?.muhokamalar} materialId={Material.id}/>
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

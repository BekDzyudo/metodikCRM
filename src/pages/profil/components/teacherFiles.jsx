import React, { useContext, useState } from "react";
import { PortfolioContext } from "./contexts/editPortfolioContext";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import useGetFetchProfil from "../../../hooks/useGetFetchProfil";
import { MdNavigateNext } from "react-icons/md";
import { AuthContext } from "../../../contexts/AuthContext";
import { MalumotContext } from "./contexts/editMalumotlarContext";
import ChatModal from "./modal/chat/ChatModal";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function TeacherFiles() {
  const { setAddHujjat } = useContext(PortfolioContext);
  const { userData } = useContext(AuthContext);
  const { setChatActiveModal } = useContext(MalumotContext);

  const [detailId, setDetailId] = useState(null);

  const { data: Materiallar } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/birlashma/material/${userData?.userId}`
  );


  const [holat, setHolat] = useState("");
  const handleChange = (e) => {
    setHolat(e.target.value);
  };

  return (
    <>
      {Materiallar && (
        <div className="document_new">
          <div className="jadval_top">
            <div className="jadval_name">
              <h4>Materiallar</h4>
            </div>
            <div
              className="hujjat_turi"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Hujjat turi
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={holat}
                  onChange={handleChange}
                  autoWidth
                  label="Hujjat turi"
                >
                  <div>
                  <MenuItem value={20}>Barchasi</MenuItem>
                  <MenuItem value={20}>Yangi</MenuItem>
                  <MenuItem value={21}>Tasdiqlangan</MenuItem>
                  <MenuItem value={22}>Rad etilgan</MenuItem>
                  </div>
                </Select>
              </FormControl>
              {/* <div className="select_field">
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
              </div> */}
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
                  <th>Fan nomi</th>
                  <th>Material turi</th>
                  <th>Holati</th>
                  <th>Kommentariya</th>
                  <th>Materialni ko'rish</th>
                </tr>
              </thead>
              <tbody>
                {Materiallar.map((item, index) => {
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
                          <button className="success">Tasdiqlandi</button>
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
                        {/* to={`/profil/${item.id}`} */}
                        <Link
                          onClick={() => {
                            setDetailId(item.id);
                            setChatActiveModal(true);
                          }}
                        >
                          Chatga o'tish{" "}
                          <MdNavigateNext style={{ fontSize: "16px" }} />
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
            {/* <Pagination count={10} color="primary"></Pagination> */}
          </div>
        </div>
      )}
      <ChatModal materialId={detailId} />
    </>
  );
}

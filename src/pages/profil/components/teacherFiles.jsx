import React, { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "./contexts/editPortfolioContext";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import useGetFetchProfil from "../../../hooks/useGetFetchProfil";
import { MdNavigateNext } from "react-icons/md";
import { AuthContext } from "../../../contexts/AuthContext";
import { MalumotContext } from "./contexts/editMalumotlarContext";
import ChatModal from "./modal/chat/ChatModal";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function TeacherFiles() {
  const { setAddHujjat, addhujjat } = useContext(PortfolioContext);
  const { userData, auth } = useContext(AuthContext);
  const { setChatActiveModal, chatActiveModal } = useContext(MalumotContext);

  const [detailId, setDetailId] = useState(null);
  const [page, setPage] = useState(1);
  const [Materiallar, setMateriallar] = useState(null)

  useEffect(()=>{
    fetch( `${import.meta.env.VITE_BASE_URL}/birlashma/material/${
      userData?.userId
    }/?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth?.accessToken,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => {
        setMateriallar(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [chatActiveModal, page, userData?.userId, auth?.accessToken, addhujjat])

  const [holat, setHolat] = useState("");
  const handleChange = (e) => {
    setHolat(e.target.value);
  };

  function handlePagination(e, p) {
    setPage(p);
  }

  return (
    <>
      {Materiallar?.results && (
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
                  <th>Muhokama</th>
                  <th>Materialni ko'rish</th>
                </tr>
              </thead>
              <tbody>
                {Materiallar?.results.map((item, index) => {
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
                          style={{
                            padding: "15px 30px 0px 0px",
                            position: "relative",
                          }}
                          onClick={() => {
                            setDetailId(item.id);
                            setChatActiveModal(true);
                          }}
                        >
                          Chatga o'tish{" "}
                          <MdNavigateNext style={{ fontSize: "16px" }} />
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
                                  style={{ color: "white", fontSize: "13px" }}
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
                                  style={{ color: "white", fontSize: "13px" }}
                                >
                                  {item.count_not_read}
                                </span>
                              </span>
                            )}
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
        </div>
      )}
      <ChatModal materialId={detailId} />
    </>
  );
}

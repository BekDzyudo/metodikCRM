import React, { useEffect, useState } from "react";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import FooterWhite from "../../components/footer/FooterWhite";
import "./materiallar.scss";
import useGetFetch from "../../hooks/useGetFetchProfil";
import { Link, NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { Pagination } from "@mui/material";

function Materiallar() {
  const [bilim, setBilim] = useState("");
  const [talim, setTalim] = useState("");
  const [yunalish, setYunalish] = useState("");
  const [kasb, setKasb] = useState("");
  const [fan, setFan] = useState("");
  const [materialTypestate, setMaterialTypestate] = useState("");

  const { data: bilim_soha } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/bilim-soha/`
  );
  const { data: talim_soha } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/talim-soha/?bilim_soha=${bilim}`
  );
  const { data: talim_yunalish } = useGetFetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/edu-prof/talim-yunalish/?talim_soha=${talim}`
  );
  const { data: kasb_mutaxassislik } = useGetFetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/edu-prof/kasb-va-mutaxassislik/?talim_yunalish=${yunalish}`
  );
  const { data: fanlar } = useGetFetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/edu-prof/fan/?kasb_va_mutaxassislik=${kasb}`
  );

  const { data: materialType } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/birlashma/kategoriya-material/`
  );

  const [buttons, setButtons] = useState([]);
  const [barchasi, setBarchasi] = useState(true);
  useEffect(() => {
    if (materialType && materialType.length > 0) {
      setTimeout(() => {
        setButtons(
          materialType?.map((item) => {
            return { name: item.name, id: item.id, active: false };
          })
        );
      }, 100);
    }
  }, [materialType]);

  function toggleBtn(id) {
    setButtons(
      buttons.map((btn) => {
        return btn.id === id
          ? { ...btn, active: !btn.active }
          : { ...btn, active: false };
      })
    );
  }

  const { data: materialList } = useGetFetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/birlashma/material-list/?kategoriya_material=${materialTypestate}&fan=${fan}&fan__kasb_va_mutaxassislik__talim_yunalish__talim_soha__bilim_soha=${bilim}&fan__kasb_va_mutaxassislik__talim_yunalish__talim_soha=${talim}&fan__kasb_va_mutaxassislik__talim_yunalish=${yunalish}&
    fan__kasb_va_mutaxassislik=${kasb}`
  );

  function handlePagination(e, p) {
    setPage(p);
  }

  return (
    <div className="materiallar">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <div className="material_filter">
          <h1>Foydalanish uchun materiallar</h1>
          <div className="filterBlok">
            <select
              name=""
              id=""
              defaultValue=""
              onChange={(e) => setBilim(e.target.value)}
            >
              <option value="" disabled>
                Bilim soha
              </option>
              {bilim_soha &&
                bilim_soha.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <select
              name=""
              id=""
              defaultValue=""
              onChange={(e) => setTalim(e.target.value)}
            >
              <option disabled value="">
                Talim soha
              </option>
              {talim_soha &&
                talim_soha.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <select
              name=""
              id=""
              defaultValue=""
              onChange={(e) => setYunalish(e.target.value)}
            >
              <option disabled value="">
                Talim yo'nalish
              </option>
              {talim_yunalish &&
                talim_yunalish.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <select
              name=""
              id=""
              defaultValue=""
              onChange={(e) => setKasb(e.target.value)}
            >
              <option disabled value="">
                Kasb va mutaxasisliklar
              </option>
              {kasb_mutaxassislik &&
                kasb_mutaxassislik.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <select
              name=""
              id=""
              defaultValue=""
              onChange={(e) => setFan(e.target.value)}
            >
              <option disabled value="">
                Fanlar
              </option>
              {fanlar &&
                fanlar.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="contentBlock">
          <div className="sidebar">
            <NavLink
              onClick={() => {
                setButtons(
                  buttons.map((btn) => {
                    return { ...btn, active: false };
                  })
                );
                setMaterialTypestate("");
              }}
              end
              className={
                buttons?.every((btn) => btn.active == false)
                  ? "isActive"
                  : "malumot_card"
              }
            >
              <p>Barchasi</p>
            </NavLink>
            {buttons &&
              buttons.map((item) => {
                return (
                  <NavLink
                    onClick={() => {
                      setMaterialTypestate(item.id);
                      toggleBtn(item?.id);
                    }}
                    key={item?.id}
                    end
                    className={item?.active ? "isActive" : "malumot_card"}
                  >
                    <p>{item?.name}</p>
                  </NavLink>
                );
              })}
          </div>
          <div className="contents">
            <div className="content">
              {materialList?.results &&
                materialList.results.map((item) => {
                  return (
                    <div key={item.id} className="cardMaterial">
                      <h2>
                        <span>{item.kategoriya_material?.name}</span>
                      </h2>
                      <h1>{item.fan?.name}</h1>
                      <div className="btnShow">
                        <Link to={`/materiallarDetail/${item.id}`}>
                          Ko'rish{" "}
                          <span>
                            <FaEye />
                          </span>
                        </Link>
                        <Link to={item.file} download={true} target="_blank">
                          Yuklab olish{" "}
                          <span>
                            <FiDownload />
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            {materialList?.total_pages > 1 && (
              <div className="paginationn">
                <Pagination
                  style={{ margin: 0, padding: 0 }}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "blue",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "white",
                        color: "blue",
                        fontWeight: "600px",
                        fontSize: "20px",
                      },
                    },
                  }}
                  count={materialList?.total_pages}
                  color="primary"
                  size="large"
                  onChange={handlePagination}
                ></Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterWhite />
    </div>
  );
}

export default Materiallar;

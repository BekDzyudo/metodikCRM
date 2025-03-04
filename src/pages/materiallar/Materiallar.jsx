import React, { useState } from "react";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import FooterWhite from "../../components/footer/FooterWhite";
import "./materiallar.scss";
import useGetFetch from "../../hooks/useGetFetchProfil";
import { NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

function Materiallar() {
  const [bilim, setBilim] = useState("");
  const [talim, setTalim] = useState("");
  const [yunalish, setYunalish] = useState("");
  const [kasb, setKasb] = useState("");
  const [fan, setFan] = useState("");

  const { data: bilim_soha } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/bilim-soha/`
  );
  const { data: talim_soha } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/talim-soha/`
  );
  const { data: talim_yunalish } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/talim-yunalish/`
  );
  const { data: kasb_mutaxassislik } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/kasb-va-mutaxassislik/`
  );
  const { data: fanlar } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/fan/`
  );

  const { data: materialType } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/birlashma/kategoriya-material/`
  );

  const { data: materialList } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/birlashma/material-list/`
  );
console.log(materialList);

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
              to=""
              end
              className={({ isActive }) =>
                isActive ? "isActive" : "malumot_card"
              }
            >
              <p>Barchasi</p>
            </NavLink>
            {materialType &&
              materialType.map((item) => {
                return (
                  <NavLink
                  key={item.id}
                    to=""
                    end
                    className={({ isActive }) =>
                      isActive ? "isActive" : "malumot_card"
                    }
                  >
                    <p>{item.name}</p>
                  </NavLink>
                );
              })}
          </div>
          <div className="content">
            <div className="cardMaterial">
              <h2>
                <span>Maruza matni</span>
              </h2>
              <h1>Texnik chizmachilik</h1>
              <div className="btnShow">
                <button>
                  Ko'rish{" "}
                  <span>
                    <FaEye />
                  </span>
                </button>
                <button>
                  Yuklab olish{" "}
                  <span>
                    <FiDownload />
                  </span>
                </button>
              </div>
            </div>
            <div className="cardMaterial">
              <h2>
                <span>Maruza matni</span>
              </h2>
              <h1>Texnik chizmachilik</h1>
              <div className="btnShow">
                <button>
                  Ko'rish{" "}
                  <span>
                    <FaEye />
                  </span>
                </button>
                <button>
                  Yuklab olish{" "}
                  <span>
                    <FiDownload />
                  </span>
                </button>
              </div>
            </div>
            <div className="cardMaterial">
              <h2>
                <span>Maruza matni</span>
              </h2>
              <h1>Texnik chizmachilik</h1>
              <div className="btnShow">
                <button>
                  Ko'rish{" "}
                  <span>
                    <FaEye />
                  </span>
                </button>
                <button>
                  Yuklab olish{" "}
                  <span>
                    <FiDownload />
                  </span>
                </button>
              </div>
            </div>
            <div className="cardMaterial">
              <h2>
                <span>Maruza matni</span>
              </h2>
              <h1>Texnik chizmachilik</h1>
              <div className="btnShow">
                <button>
                  Ko'rish{" "}
                  <span>
                    <FaEye />
                  </span>
                </button>
                <button>
                  Yuklab olish{" "}
                  <span>
                    <FiDownload />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterWhite />
    </div>
  );
}

export default Materiallar;

import React, { useRef, useState } from "react";
import "./teacherRating.scss";
import TopNavbar from "../../components/navbar/topNavbar/TopNavbar";
import Navbar from "../../components/navbar/navbarMenu/Navbar";
import FooterWhite from "../../components/footer/FooterWhite";
import telba from "../../images/img/telba.jpg";
import { Pagination } from "@mui/material";
import useGetFetch from "../../hooks/useGetFetchProfil";

function TeacherRating() {
  const [bilim, setBilim] = useState("")
  const [talim, setTalim] = useState("")
  const [yunalish, setYunalish] = useState("")
  const [kasb, setKasb] = useState("")
  const [fan, setFan] = useState("")
  

  const { data: bilim_soha } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/bilim-soha/`
  );
  const { data: talim_soha } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/talim-soha/?bilim_soha=${bilim}`
  );
  const { data: talim_yunalish } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/talim-yunalish/?talim_soha=${talim}`
  );
  const { data: kasb_mutaxassislik } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/kasb-va-mutaxassislik/?talim_yunalish=${yunalish}`
  );
  const { data: fanlar } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/fan/?kasb_va_mutaxassislik=${kasb}`
  );
  const { data: reyting } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/reyting_app/reyting/?bilim_soha=${bilim}&talim_soha=${talim}&talim_yunalish=${yunalish}&kasb_va_mutaxasislik=${kasb}&fan=${fan}`
  );

  return (
    <div className="rating_bg">
      <TopNavbar />
      <Navbar />
      <div className="container">
        {reyting?.results && (
          <>
            <div className="rating_filter">
              <h1>Fan o‘qituvchilar reytingi</h1>
              <div className="filterBlok">
                <select name="" id="" defaultValue="" onChange={(e)=>setBilim(e.target.value)}>
                  <option value="" disabled style={{color:"white"}}>
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
                <select name="" id="" defaultValue="" onChange={(e)=>setTalim(e.target.value)}>
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
                <select name="" id="" defaultValue="" onChange={(e)=>setYunalish(e.target.value)}>
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
                <select name="" id="" defaultValue="" onChange={(e)=>setKasb(e.target.value)}>
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
                <select name="" id="" defaultValue="" onChange={(e)=>setFan(e.target.value)}>
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
            <div className="content">
              <h1>O‘qituvchilar soni {reyting.count} ta</h1>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>F.I.O</th>
                    <th>Viloyat</th>
                    <th>Tuman</th>
                    <th>Ta'lim muassasasi</th>
                    <th>Fan</th>
                    <th>Reyting</th>
                  </tr>
                </thead>
                <tbody>
                  {reyting.results.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>
                          <div className="image">
                            <img src={data.user?.image} alt="Avatar" />
                          </div>
                        </td>
                        <td>{data.user?.full_name}</td>
                        <td>{data.user?.region}</td>
                        <td>{data.user?.district}</td>
                        <td>{data.user?.college}</td>
                        <td>{data.fan?.name}</td>
                        <td>{data.toplagan_bali}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* <Pagination style={{display:"flex", justifyContent:"end", margin:0, padding:0}}
           count={10} color="primary">
          </Pagination> */}
            </div>
          </>
        )}
      </div>
      <FooterWhite />
    </div>
  );
}

export default TeacherRating;

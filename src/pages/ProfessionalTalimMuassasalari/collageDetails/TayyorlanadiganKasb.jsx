import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import useGetFetch from "../../../hooks/useGetFetch";
import PageLoader from "../../../Loader/PageLoader";
import { BiSolidCommentError } from "react-icons/bi";

export default function TayyorlanadiganKasb() {
  const [active0, setActive0] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [type, setType] = useState(null)
  const {
    data: kasbArr,
    isPending,
    error,
  } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/mutaxasisliklar/${type ? "?type="+type : ""}`);

  if (error) {
    return (
      <div className="noData">
        <h1>Sahifa topilmadi</h1> <MdOutlineErrorOutline />{" "}
      </div>
    );
  }
// mutaxasisliklar/?type=maxsus
  return (
    <>
      {isPending && <PageLoader />}
      {kasbArr?.length ? (
        <>
          <div className="malumot_body-btn">
            <div className="kasb-top-btn">
            <div className="malumot_top">
                <NavLink
                  onClick={() => {
                    setType(null), setActive0(true), setActive1(false), setActive2(false), setActive3(false);
                  }}
                  className={active0 ? "isActive_kasb" : "malumot_btn"}
                  to=""
                  end
                >
                  <p>Barchasi</p>
                </NavLink>
              </div>
              <div className="malumot_top">
                <NavLink
                  onClick={() => {
                    setType("umumkasbiy"), setActive0(false), setActive1(!active1), setActive2(false), setActive3(false);
                  }}
                  className={active1 ? "isActive_kasb" : "malumot_btn"}
                  to=""
                >
                  <p>Umumkasbiy fanlar</p>
                </NavLink>
              </div>
              <div className="malumot_top">
                <NavLink
                  onClick={() => {
                    setType("maxsus"), setActive0(false), setActive2(!active2), setActive1(false), setActive3(false);
                  }}
                  className={active2 ? "isActive_kasb" : "malumot_btn"}
                  to=""
                >
                  <p>Maxsus fanlar</p>
                </NavLink>
              </div>
              <div className="malumot_top">
                <NavLink
                  onClick={() => {
                    setType("amaliyot"), setActive0(false), setActive3(!active3), setActive2(false), setActive1(false);
                  }}
                  className={active3 ? "isActive_kasb" : "malumot_btn"}
                  to=""
                >
                  <p>O'quv amaliyoti</p>
                </NavLink>
              </div>
            </div>
            {/* <div className="kasb-search">
              <form action="#">
                <input type="search" placeholder="Izlash..." />
              </form>
            </div> */}
          </div>
          <div className="malumot_body">
            {kasbArr.map((kasb) => {
              return (
                <Link key={kasb.id} className="kasb_card">
                  <div className="kasb_img">
                    <img src={kasb.image} alt="" />
                  </div>
                  <div>
                    <p>{kasb.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <div className="noData">
          <h1>Hozircha fayl yuklanmagan</h1> <BiSolidCommentError />{" "}
        </div>
      )}
    </>
  );
}

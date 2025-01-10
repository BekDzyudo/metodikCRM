import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { GlobalContext } from "../../../contexts/GlobalContext";
import useGetFetch from "../../../hooks/useGetFetch";
import PageLoader from "../../../Loader/PageLoader";
import { Pagination } from "@mui/material";

function BoshlangichTalim() {
  const { boshlangichSidebar } = useContext(GlobalContext);
  const [active, setActive] = useState(-1);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  function handleActive(index) {
    setActive(index);
  }
  function handlePagination(e, p) {
    setPage(p);
  }

  const { data, isPending, error } = useGetFetch(
    `https://rtr.profedu.uz/api/v1/rtr_base_app/subject-list/1/level/?general_subject=${category}&page=${page}`
  );

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <Link to="/raqamli-talim-resurslari" className="bosh">
            Raqamli ta'lim resurslari
          </Link>
        </div>
      </div>
      <div className="block">
        <div className="sidebar">
          <button
            className={active == -1 ? "isActive" : "malumot_card"}
            onClick={() => {
              handleActive(-1);
              setCategory("");
            }}
          >
            <p>Barchasi</p>
          </button>
          {boshlangichSidebar &&
            boshlangichSidebar.map((item, index) => {
              return (
                <button
                  className={active == index ? "isActive" : "malumot_card"}
                  key={item.id}
                  onClick={() => {
                    handleActive(index);
                    setCategory(item.id);
                  }}
                >
                  <p>{item.title}</p>
                </button>
              );
            })}
        </div>
        <div className="content">
          {isPending && <PageLoader />}
          {error && <div className="noData">{error}</div>}
          {data?.results.length ? (
            data.results.map((item) => {
              return (
                <Link to={`/raqamli-talim-resurslari/boshlangich-professional-talim/${item.id}`} className="cardd" key={item.id}>
                  <div className="image">
                    <img src={item.photo} alt="" />
                  </div>
                  <div className="data">
                    <div>
                      <h2 className="title">
                        {item.title.slice(0, 45)}{" "}
                        {item.title.length > 45 ? "..." : ""}
                      </h2>
                      <p className="desc">
                        {item.code.slice(0, 60)}{" "}
                        {item.title.length > 60 ? "..." : ""}
                      </p>
                    </div>
                    <div className="btns">
                      <div>
                        <span>
                          <FaRegPlayCircle style={{ fontSize: "20px" }} />
                        </span>
                        <span>{item.themes_count}</span>
                      </div>
                      <div>
                        <span>
                          <FaEye style={{ fontSize: "20px" }} />
                        </span>
                        <span>{item.view_count}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <h2
              className="noData"
              style={{ textAlign: "center", width: "100%" }}
            >
              Malumot yuklanmagan
            </h2>
          )}

          {data?.total_pages > 1 && (
            <ul className="pagenation" style={{width:"100%", justifyContent:"center"}}>
              <Pagination
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
                count={data?.total_pages}
                color="primary"
                size="large"
                onChange={handlePagination}
              ></Pagination>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoshlangichTalim;

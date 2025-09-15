import React, { useState } from "react";
import "./main.scss";
import useGetFetch from "../../../../hooks/useGetFetch";
import { Link, NavLink } from "react-router-dom";
import PageLoader from "../../../../Loader/PageLoader";
import { BiSolidCommentError } from "react-icons/bi";
import { Pagination } from "@mui/material";

export function MainAdabiyot() {
  // sidebar
  const { data } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/category-adabiyot/`
  );
  // bookContent
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(-1);

  function handleActive(index) {
    setActive(index);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function handlePagination(e, p) {
    setPage(p);
  }

  const {
    data: adabiyotlar,
    isPending,
    error,
  } = useGetFetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/edu-prof/adabiyotlar/?category=${category}&page=${page}&search=${search}`
  );

  return (
    <>
      <div className="top">
        <div className="left">
          <Link to="/" className="bosh">
            Bosh sahifa
          </Link>
          <Link className="bosh">Adabiyotlar</Link>
        </div>
        <div className="right">
          <Link to="/">
            <i className="bi bi-arrow-left-short"></i> Orqaga
          </Link>
        </div>
      </div>
      <div className="mobileSearch">
        {data && (
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-success"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                outline: "none",
                boxShadow: "none",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              Menu
            </button>
            <ul class="dropdown-menu">
              <li>
                <button
                  onClick={() => {
                    setCategory("");
                    handleActive(-1);
                  }}
                  className="dropdown-item"
                >
                  <p>Barchasi</p>
                </button>
              </li>
              {data.map((item, index) => {
                return (
                  <li>
                    <button
                      onClick={() => {
                        setCategory(item.id);
                        handleActive(index);
                      }}
                      key={item.id}
                      className="dropdown-item"
                    >
                      <p>{item.name}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="talim_search">
          <input onChange={handleSearch} type="search" placeholder="izlash" />
        </div>
      </div>
      <div className="adabiyotlarMain">
        <div className="sidebar">
          <div className="talim_search">
            <input onChange={handleSearch} type="search" placeholder="izlash" />
          </div>
          {data && (
            <div className="sidebar">
              <button
                onClick={() => {
                  setCategory("");
                  handleActive(-1);
                }}
                className={active == -1 ? "isActive" : "malumot_card"}
              >
                <p>Barchasi</p>
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      setCategory(item.id);
                      handleActive(index);
                    }}
                    key={item.id}
                    className={active == index ? "isActive" : "malumot_card"}
                  >
                    <p>{item.name}</p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div className="booksContent">
          {isPending && <PageLoader />}
          {error && <div className="noData">{error}</div>}
          {adabiyotlar && (
            <>
              <div className="booksBlok">
                {adabiyotlar.results?.length == 0 ? (
                  <div className="noData">
                    <h1>Hozircha fayllar yuklanmagan</h1>{" "}
                    <BiSolidCommentError />{" "}
                  </div>
                ) : (
                  adabiyotlar.results?.map((item) => (
                    <Link
                      to={`/Adabiyotlar/${item.id}`}
                      key={item.id}
                      className="cardss"
                    >
                      <div className="bookTitle">
                        <div className="title">
                          <p className="bookName">{item.name}</p>
                          <p className="bookAutor">{item.description}</p>
                        </div>
                        <button className="batafsil">Batafsil</button>
                      </div>
                      <div className="bookImg">
                        <img src={item.image} alt="rasm" />
                      </div>
                    </Link>
                  ))
                )}
              </div>
              {adabiyotlar.total_pages > 1 && (
                <ul className="pagenation">
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
                    count={adabiyotlar.total_pages}
                    color="primary"
                    size="large"
                    onChange={handlePagination}
                  ></Pagination>
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

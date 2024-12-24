import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLoader from "../../../../../Loader/PageLoader";
import useGetFetch from "../../../../../hooks/useGetFetch";
import { BiSolidCommentError } from "react-icons/bi";
import { Pagination } from "@mui/material";

export function Bookblok() {
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }

  const {
    data: adabiyotlar,
    isPending,
    error,
  } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/edu-prof/adabiyotlar/?page=${page}`);
  console.log(adabiyotlar);

 

  return (
    <div className="booksContent">
      {isPending && <PageLoader />}
      {error && <div className="noData">{error}</div>}
      {adabiyotlar && (
        <>
          <div className="booksBlok">
            {adabiyotlar.results?.length == 0 ? (
              <div className="noData">
                <h1>Hozircha fayllar yuklanmagan</h1> <BiSolidCommentError />{" "}
              </div>
            ) : (
              adabiyotlar.results?.map((item) => (
                <div key={item.id} className="cardss">
                  <div className="bookTitle">
                    <div className="title">
                      <p className="bookName">{item.name}</p>
                      <p className="bookAutor">{item.description}</p>
                    </div>
                    <Link to="/Adabiyotlar/book" className="batafsil">
                      Batafsil
                    </Link>
                  </div>
                  <div className="bookImg">
                    <img src={item.image} alt="rasm" />
                  </div>
                </div>
              ))
            )}
          </div>
          <ul className="pagenation">
            <Pagination
             sx={{
              '& .MuiPaginationItem-root': {
                color: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  color: "blue"
                },
                '&.Mui-selected': {
                  backgroundColor: 'white',
                  color: 'blue',
                  fontWeight: "600px",
                  fontSize:"20px"
                },
              },
            }}
              count={adabiyotlar.total_pages}
              color="primary"
              size="large"
              onChange={handlePagination}
            ></Pagination>
          </ul>
        </>
      )}
    </div>
  );
}

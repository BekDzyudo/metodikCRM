import React, { useContext, useEffect, useRef, useState } from "react";
import "./bookBatafsil.scss";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLoader from "../../../../../Loader/PageLoader";
import useGetFetch from "../../../../../hooks/useGetFetch";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { toast } from "react-toastify";
import { Pagination, ToggleButton } from "@mui/material";
import Comments from "./Comments";

export function BookBatafsil() {
  const { userName } = useContext(AuthContext);
  const { id } = useParams();
  // ref
  const userCommentText = useRef();
  const regCommentForm = useRef();
  // state
  const [page, setPage] = useState(1);

  const monthArr = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];

  // adabiyot
  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/adabiyotlar/${id}/?page=${page}`
  );

  // add comment funck
  function addComment(commentId) {
    let obj = {
      user: userName.userId,
      adabiyot: id,
      text: userCommentText.current.value,
      reply_comment: commentId,
      is_reply: true,
    };
    if (!obj.text.trim()) {
      toast.error("Iltimos bo'sh maydonni to'ldiring");
    } else {
      fetch(`${import.meta.env.VITE_BASE_URL}/edu-prof/create-comment/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then(async (res) => {
          console.log(res);

          const errorObj = await res.json();
          if (!res.ok) throw new Error(JSON.stringify(errorObj));
          return res;
        })
        .then((data) => {
          regCommentForm.current.reset();
        })
        .catch((err) => {
          const errorObj = JSON.parse(err.message);
          toast.error(errorObj);
        })
        .finally(() => {
          // location.reload()
        });
    }
  }

  function handlePagination(e, p) {
    setPage(p);
  }

  return (
    <>
      <div className="top">
        <div className="left">
          <Link to="/" className="bosh">
            Bosh sahifa
          </Link>
          <Link to="/Adabiyotlar" className="bosh">
            Adabiyotlar
          </Link>
        </div>
        <div className="right">
          <Link to="/Adabiyotlar">
            <i className="bi bi-arrow-left-short"></i> Orqaga
          </Link>
        </div>
      </div>
      <div className="bookBatafsil">
        {isPending && <PageLoader />}
        {error && <div className="noData">{error}</div>}
        {data && (
          <>
            <div className="bookTitle">
              <p>{data.results.adabiyotlar.name}</p>
            </div>
            <div className="bookContent">
              <div className="bookImg">
                <img src={data.results.adabiyotlar.image} alt="" />
              </div>
              <div className="bookDesc">
                <p className="title">Badiiy adabiyot haqida</p>
                <p className="titleName">
                  {data.results.adabiyotlar.description}
                </p>
                <div className="yuklash">
                  <div className="yuklashDesc">
                    <p>Badiiy adabiyot</p>
                    <p>
                      So’ngi o’zgartirilgan sana:{" "}
                      <span>
                        {new Date(
                          data.results.adabiyotlar.created_at
                        ).getDate()}
                        -
                        {
                          monthArr[
                            new Date(
                              data.results.adabiyotlar.created_at
                            ).getMonth()
                          ]
                        }{" "}
                        {new Date(
                          data.results.adabiyotlar.created_at
                        ).getFullYear()}
                        -yil
                      </span>
                    </p>
                  </div>
                  <Link
                    to={data.results.adabiyotlar.file}
                    target="_blanck"
                    className="yuklashBtn"
                  >
                    Yuklab olish
                  </Link>
                </div>
                <hr className="hr" />
                <div className="izohlar">
                  <p className="izohTitle">Izohlar</p>
                  <form action="" className="izohForm" ref={regCommentForm}>
                    <textarea
                      ref={userCommentText}
                      name=""
                      id="matn"
                      cols="30"
                      rows="5"
                      placeholder="Izoh matni..."
                    ></textarea>
                  </form>
                  <div className="saveBlok">
                    <button
                      className="saveBtn"
                      id="saveMalumot"
                      onClick={() => addComment(null)}
                    >
                      Yuborish
                    </button>
                  </div>
                </div>
                <div className="comments">
                  {data.results.comments &&
                    data.results.comments.map((comment, index) => {
                      return (
                        <Comments key={comment.id} comment={comment} index={index}/> 
                      );
                    })}
                    {
                      data?.count > 10 && (
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
                          count={Math.ceil(data?.count/10)}
                          color="primary"
                          size="large"
                          onChange={handlePagination}
                        ></Pagination>
                      </ul>
                      )
                    }
                 
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

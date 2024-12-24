import React, { useEffect, useState } from "react";
import "./bookBatafsil.scss";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLoader from "../../../../../Loader/PageLoader";
import useGetFetch from "../../../../../hooks/useGetFetch";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

export function BookBatafsil() {
  const { id } = useParams();
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

  const [replayComment, setReplayComment] = useState(-1);
  function handleActive(index) {
    setReplayComment(index);
  }

  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/adabiyotlar/${id}/`
  );
  console.log(data);

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
              <p>{data.name}</p>
            </div>
            <div className="bookContent">
              <div className="bookImg">
                <img src={data.image} alt="" />
              </div>
              <div className="bookDesc">
                <p className="title">Badiiy adabiyot haqida</p>
                <p className="titleName">{data.description}</p>
                <div className="yuklash">
                  <div className="yuklashDesc">
                    <p>Badiiy adabiyot</p>
                    <p>
                      So’ngi o’zgartirilgan sana:{" "}
                      <span>
                        {new Date(data.created_at).getDate()}-
                        {monthArr[new Date(data.created_at).getMonth()]}{" "}
                        {new Date(data.created_at).getFullYear()}-yil
                      </span>
                    </p>
                  </div>
                  <Link to={data.file} target="_blanck" className="yuklashBtn">
                    Yuklab olish
                  </Link>
                </div>
                <hr className="hr" />
                <div className="izohlar">
                  <p className="izohTitle">Izohlar</p>
                  <form action="" className="izohForm">
                    <textarea
                      name=""
                      id="matn"
                      cols="30"
                      rows="5"
                      placeholder="Izoh matni..."
                    ></textarea>
                  </form>
                  <div className="saveBlok">
                    <button className="saveBtn">Yuborish</button>
                  </div>
                </div>
                <div className="comments">
                  {data.comments &&
                    data.comments.map((comment, index) => {
                      return (
                        <div key={comment.id} className="comment">
                          <div className="commentImage">
                            <img src={comment.user.image} alt="" />
                          </div>
                          <div className="commentDesc">
                            <div className="nameAndDate">
                              <span>
                                {comment.user.first_name +
                                  " " +
                                  comment.user.last_name}
                              </span>
                              <span>
                                {new Date(data.created_at).getDate()}.
                                {new Date(data.created_at).getMonth() + 1}.
                                {new Date(data.created_at).getFullYear()}
                              </span>
                            </div>
                            <div className="commentTitle">{comment.text}</div>
                            <div className="btns">
                              <div className="like">
                                <span>
                                  <BiLike />
                                </span>
                                <span>10</span>
                              </div>
                              <div className="disLike">
                                <span>
                                  <BiDislike />
                                </span>
                                <span>5</span>
                              </div>
                              <button onClick={() => handleActive(index)}>
                                Javob yozish
                              </button>
                            </div>
                            {/*  */}
                            <div className={replayComment == index ? "replyForm" : "replyNone"}>
                              <div className="replyCommentImage">
                                <img src={comment.user.image} alt="" />
                              </div>
                              <form>
                                <input type="text" placeholder="kommentariya..."/>
                                <div className="replyBtns">
                                  <button type="button" onClick={()=>setReplayComment(-1)}>Bekor qilish</button>
                                  <button type="submit">Yuborish</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

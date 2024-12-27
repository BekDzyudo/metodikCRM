import React, { useContext, useEffect, useRef, useState } from "react";
import "./bookBatafsil.scss";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLoader from "../../../../../Loader/PageLoader";
import useGetFetch from "../../../../../hooks/useGetFetch";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { toast } from "react-toastify";
import { ToggleButton } from "@mui/material";

export function BookBatafsil() {
  const { userName } = useContext(AuthContext);
  const { id } = useParams();
  // ref
  const userCommentText = useRef();
  const regCommentForm = useRef();
  const replyCommentForm = useRef();
  // state
  const [replyText, setReplyText] = useState("");
  const [like, setLike] = useState(0);
  const [disLike, setDislike] = useState(0);

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

  // reply comments
  const [replayComment, setReplayComment] = useState(-1);
  function handleActive(index) {
    setReplayComment(index);
  }
    // reply comments
    const [replayCommentDetails, setReplayCommentDetails] = useState(-1);
    function handleActiveDetails(index) {
      setReplayCommentDetails(index);
    }
    // reply comments List
    const [replayCommentList, setReplayCommentList] = useState(-1);
    function handleActiveList(index) {
      setReplayCommentList(index);
    }
  // adabiyot
  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/edu-prof/adabiyotlar/${id}/`
  );
  // console.log(data);

  // add comment funck
  function addComment(commentId) {
    let obj = {
      user: userName.userId,
      adabiyot: id,
      text: userCommentText.current.value,
      reply_comment: commentId,
      is_reply: true
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

  // reply funck
  const handleReply = (commentId) => {
    let obj = {
      user: userName.userId,
      adabiyot: id,
      text: replyText,
      reply_comment: commentId,
    };
    console.log(obj);

    if (!replyText.trim()) {
      toast.error("Iltimos bo'sh maydonni to'ldiring");
    } else {
      fetch(`${import.meta.env.VITE_BASE_URL}/edu-prof/create-comment/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then(async (res) => {
          const errorObj = await res.json();
          if (!res.ok) throw new Error(JSON.stringify(errorObj));
          return res;
        })
        .then((data) => {
          setReplyText("");
        })
        .catch((err) => {
          const errorObj = JSON.parse(err.message);
          toast.error(errorObj);
        })
        .finally(() => {
          replyCommentForm.current.reset();
        });
    }
  };

  // like and disLike
  const handleLike = (commentId) => {
    let obj = {
      like: like,
      dislike: disLike,
      text: replyText,
    };
    console.log(obj);

    useEffect(()=>{
      fetch(`${import.meta.env.VITE_BASE_URL}/edu-prof/update-comment/${commentId}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then(async (res) => {
          const errorObj = await res.json();
          if (!res.ok) throw new Error(JSON.stringify(errorObj));
          return res;
        })
        .then((data) => {
          setReplyText("");
        })
        .catch((err) => {
          const errorObj = JSON.parse(err.message);
          toast.error(errorObj);
        })
        .finally(() => {
          replyCommentForm.current.reset();
        });
    }, [])
  };

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
                                {new Date(comment.created_at).getDate()}.
                                {new Date(comment.created_at).getMonth() + 1}.
                                {new Date(comment.created_at).getFullYear()}
                              </span>
                            </div>
                            <div className="commentTitle">{comment.text}</div>
                            <div className="btns">
                              <div className="like">
                                <span onClick={()=>setLike()}>
                                  <BiLike />
                                </span>
                                <span>{comment.like > 0 ? comment.like : ""}</span>
                              </div>
                              <div className="disLike">
                                <span>
                                  <BiDislike />
                                </span>
                                <span>{comment.dislike > 0 ? comment.dislike : ""}</span>
                              </div>
                              <button onClick={() => handleActive(index)}>
                                Javob yozish
                              </button>
                            </div>
                            <div
                              className={
                                replayComment == index
                                  ? "replyForm"
                                  : "replyNone"
                              }
                            >
                              <div className="replyCommentImage">
                                <img src={comment.user.image} alt="" />
                              </div>
                              <form ref={replyCommentForm}>
                                <input
                                  onChange={(e) => setReplyText(e.target.value)}
                                  type="text"
                                  placeholder="Javob yozing..."
                                />
                                <div className="replyBtns">
                                  <button
                                    type="button"
                                    onClick={() => setReplayComment(-1)}
                                  >
                                    Bekor qilish
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleReply(comment.id)}
                                  >
                                    Yuborish
                                  </button>
                                </div>
                              </form>
                            </div>
                            {/* ===== */}
                           
                            {comment.sub_replies.length > 0 &&  <span className="javobSelect"   onClick={()=>handleActiveList((prev)=>prev==index ? -1 : index)}>{comment.sub_replies.length} ta javob</span>}
                            {replayCommentList == index && (
                              <div className="comments">
                              {comment.sub_replies.length > 0 &&
                                comment.sub_replies.map((commentReplay, index) => {
                                  return (
                                    <div key={commentReplay.id} className="comment">
                                      <div className="commentImage">
                                        <img src={commentReplay.user.image} alt="" />
                                      </div>
                                      <div className="commentDesc">
                                        <div className="nameAndDate">
                                          <span>
                                            {commentReplay.user.first_name +
                                              " " +
                                              commentReplay.user.last_name}
                                          </span>
                                          <span>
                                            {new Date(
                                              commentReplay.created_at
                                            ).getDate()}
                                            .
                                            {new Date(
                                              commentReplay.created_at
                                            ).getMonth() + 1}
                                            .
                                            {new Date(
                                              commentReplay.created_at
                                            ).getFullYear()}
                                          </span>
                                        </div>
                                        <div className="commentTitle">
                                          {commentReplay.text}
                                        </div>
                                        <div className="btns">
                                          <div className="like">
                                            <span>
                                              <BiLike />
                                            </span>
                                            <span>{commentReplay.like}</span>
                                          </div>
                                          <div className="disLike">
                                            <span>
                                              <BiDislike />
                                            </span>
                                            <span>{commentReplay.dislike}</span>
                                          </div>
                                          <button
                                            onClick={() => handleActiveDetails(index)}
                                          >
                                            Javob yozish
                                          </button>
                                        </div>
                                        {/*  */}
                                        <div
                                          className={
                                            replayCommentDetails == index
                                              ? "replyForm"
                                              : "replyNone"
                                          }
                                        >
                                          <div className="replyCommentImage">
                                            <img
                                              src={comment.user.image}
                                              alt=""
                                            />
                                          </div>
                                          <form ref={replyCommentForm}>
                                            <input
                                              onChange={(e) =>
                                                setReplyText(e.target.value)
                                              }
                                              type="text"
                                              placeholder="Javob yozing..."
                                            />
                                            <div className="replyBtns">
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  setReplayCommentDetails(-1)
                                                }
                                              >
                                                Bekor qilish
                                              </button>
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  handleReply(comment.id)
                                                }
                                              >
                                                Yuborish
                                              </button>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                            )}
                            
                            {/* ===== */}
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

import React, { useContext, useRef, useState } from "react";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { useParams } from "react-router-dom";

function Comments({ comment, index }) {
  const replyCommentForm = useRef();
  const [replyText, setReplyText] = useState("");
  const { userData } = useContext(AuthContext);
  const { id } = useParams();

  // reply comments
  const [replayComment, setReplayComment] = useState(-1);
  function handleActive(index) {
    setReplayComment(index);
  }
  // reply comment details
  const [replayCommentDetails, setReplayCommentDetails] = useState(-1);
  function handleActiveDetails(index) {
    setReplayCommentDetails(index);
  }
  // reply comments List
  const [replayCommentList, setReplayCommentList] = useState(-1);
  function handleActiveList(index) {
    setReplayCommentList(index);
  }
  // reply funck
  const handleReply = (commentId) => {
    let obj = {
      user: userData.userId,
      adabiyot: id,
      text: replyText,
      reply_comment: commentId,
    };

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

  return (
    <div key={comment.id} className="comment">
      <div className="commentImage">
        <img src={comment.user.image} alt="" />
      </div>
      <div className="commentDesc">
        <div className="nameAndDate">
          <span>{comment.user.first_name + " " + comment.user.last_name}</span>
          <span>
            {new Date(comment.created_at).getDate()}.
            {new Date(comment.created_at).getMonth() + 1}.
            {new Date(comment.created_at).getFullYear()}
          </span>
        </div>
        <div className="commentTitle">{comment.text}</div>
        <div className="btns">
          <div className="like">
            <span onClick={() => setLike()}>
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
          <button onClick={() => handleActive(index)}>Javob yozish</button>
        </div>
        <div className={replayComment == index ? "replyForm" : "replyNone"}>
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
              <button type="button" onClick={() => setReplayComment(-1)}>
                Bekor qilish
              </button>
              <button type="button" onClick={() => handleReply(comment.id)}>
                Yuborish
              </button>
            </div>
          </form>
        </div>
        {/* ===== */}

        {comment.sub_replies.length > 0 && (
          <span
            className="javobSelect"
            onClick={() =>
              handleActiveList((prev) => (prev == index ? -1 : index))
            }
          >
            {comment.sub_replies.length} ta javob
          </span>
        )}
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
                          {new Date(commentReplay.created_at).getDate()}.
                          {new Date(commentReplay.created_at).getMonth() + 1}.
                          {new Date(commentReplay.created_at).getFullYear()}
                        </span>
                      </div>
                      <div className="commentTitle">{commentReplay.text}</div>
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
                        <button onClick={() => handleActiveDetails(index)}>
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
                              onClick={() => setReplayCommentDetails(-1)}
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
}

export default Comments;

import React, { useContext, useRef, useState } from "react";
import "./chatModal.scss";
import "react-chat-elements/dist/main.css";
import useGetFetchProfil from "../../../../../hooks/useGetFetchProfil";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MalumotContext } from "../../contexts/editMalumotlarContext";

function ChatModal({materialId}) {
  const { chatActiveModal, setChatActiveModal } = useContext(MalumotContext);
  const enterInput = useRef();
  const [inputText, setInputText] = useState("");
  const { userData } = useContext(AuthContext);

  const { data: Material } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/birlashma/material-detail/${materialId}/`
  );

  const { data: user } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/user-data/`
  );
  function sendData() {
    if (inputText) {
      fetch(`${import.meta.env.VITE_BASE_URL}/birlashma/muhokama-create/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: inputText,
          teacher: userData?.userId,
          material: Material.id,
        }),
      })
        .then((res) => {
          const errorObj = res.json();
          if (!res.ok) throw new Error(JSON.stringify(errorObj));
          return res;
        })
        .then((data) => {})
        .catch((err) => console.log(err))
        .finally(() => {
          setInputText("");
          enterInput.current.value = "";
          // location.reload();
        });
    }
  }

  function getLastSeen(timestamp) {
    const now = new Date();
    const lastSeen = new Date(timestamp);
    const diffMs = now - lastSeen; // Millisekund farqi

    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    if (diffSec < 60) return "Hozirgina online edi";
    if (diffMin < 60) return `so'ngi faollik ${diffMin} daqiqa oldin`;
    if (diffHour < 24) return `so'ngi faollik ${diffHour} soat oldin`;
    if (diffDay < 7) return `so'ngi faollik ${diffDay} kun oldin`;
    if (diffWeek < 4) return `so'ngi faollik ${diffWeek} hafta oldin`;
    if (diffMonth < 12) return `so'ngi faollik ${diffMonth} oy oldin`;
    return `so'ngi faollik ${diffYear} yil oldin`;
  }

  return (
    chatActiveModal && (
      <div className="modal">
        <div className="chat-container">
          <div className="head">
            <div className="meanAvatar">
              <img src="" alt="Avatar" />
              <div className="desc">
                <h3>{userData?.last_name + " " + userData?.first_name}</h3>
                {userData?.online ? (
                  <p>online</p>
                ) : (
                  <p> {getLastSeen(userData?.last_seen)}</p>
                )}
              </div>
            </div>
            <IoClose
              style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
              onClick={() => setChatActiveModal(false)}
            />
          </div>
          <div className="chat-body">
            {Material?.muhokamalar?.map((item) => {
              return (
                <div
                  key={item.id}
                  className={item.metodist?.id ? "message" : "message owner"}
                >
                  <div className="messageInfo">
                    <img src={item.metodist?.id ? item.metodist?.image : user.image} alt="" />
                  </div>
                  <div className="messageContent">
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="foot">
            <input
              ref={enterInput}
              type="text"
              placeholder="Xabar yozing..."
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="sendBtns">
              <button onClick={sendData}>Send</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ChatModal;

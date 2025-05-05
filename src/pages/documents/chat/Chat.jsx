import React, { useContext, useEffect, useRef, useState } from "react";
import "./chat.scss";
import "react-chat-elements/dist/main.css";
import useGetFetchProfil from "../../../hooks/useGetFetchProfil";

function Chat({ userData, muhokama, materialId, materialDetail }) {
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const enterInput = useRef();
  const [inputText, setInputText] = useState("");
  

  const { data: user } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/user-data/`
  );

  function sendData(e) {
    e.preventDefault();
    if (inputText) {
      fetch(`${import.meta.env.VITE_BASE_URL}/birlashma/muhokama-create/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: inputText,
          metodist_id: user.id,
          material: materialId,
        }),
      })
        .then(async (res) => {
          const errorObj = await res.json();
          if (!res.ok) throw new Error(JSON.stringify(errorObj));
          return res;
        })
        .then((data) => {})
        .catch((err) => console.log(JSON.parse(err.message)))
        .finally(() => {
          setInputText("");
          enterInput.current.value = "";
          materialDetail();
        });
    }
  }

  function getLastSeen(timestamp) {
    const min = timestamp.split(":")[1]
    const hour = timestamp.split(":")[0]
console.log(hour, min);

    if (min > 0 && hour == 0) return `so'ngi faollik ${min[0] == 0 ? min[1] : min} daqiqa oldin`;
    if (hour > 0) return `so'ngi faollik ${hour} soat oldin`;
    return `uzoq vaqt kirmagan`;
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [muhokama]);

  return (
    <div className="chat-container" ref={chatContainerRef}>
      <div className="head">
        <div className="meanAvatar">
          <img src={userData?.image} alt="Avatar" />
          <div className="desc">
            <h3>{userData?.last_name + " " + userData?.first_name}</h3>
            {userData?.online ? (
              <p>online</p>
            ) : (
              <p> {getLastSeen(userData?.last_seen_ago)}</p>
              // <p>{userData?.last_seen_ago}</p>
            )}
          </div>
        </div>
      </div>
      {/* <div ref={chatEndRef}/> */}
      <div className="chat-body">
        {muhokama &&
          muhokama.map((item) => {
            return (
              item.text && (
                <div
                  key={item.id}
                  className={item.teacher ? "message" : "message owner"}
                >
                  <div className="messageInfo">
                    <img
                      src={
                        item.teacher ? userData?.image : item.metodist?.image
                      }
                      alt=""
                    />
                  </div>
                  <div className="messageContent">
                    <p>
                      {(item.metodist?.id !== user?.id && item.metodist?.id) && (
                        <span>
                          {item.metodist?.first_name +
                            " " +
                            item.metodist?.last_name}
                        </span>
                      )}
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            );
          })}
      </div>
      <form className="foot" onSubmit={sendData}>
        <input
          ref={enterInput}
          type="text"
          placeholder="Xabar yozing..."
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="sendBtns">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Chat;

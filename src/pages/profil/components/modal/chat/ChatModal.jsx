import React, { useContext, useEffect, useRef, useState } from "react";
import "./chatModal.scss";
import "react-chat-elements/dist/main.css";
import useGetFetchProfil from "../../../../../hooks/useGetFetchProfil";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { IoClose } from "react-icons/io5";
import { MalumotContext } from "../../contexts/editMalumotlarContext";

function ChatModal({ materialId }) {
  
  const { chatActiveModal, setChatActiveModal } = useContext(MalumotContext);
  const chatEndRef = useRef(null);
  const enterInput = useRef();
  const [inputText, setInputText] = useState("");
  const { userData, auth } = useContext(AuthContext);
  const [Material, setMaterial] = useState(null)

  useEffect(()=>{
    if(!materialId) return
    fetch(`${import.meta.env.VITE_BASE_URL}/birlashma/material/${materialId}/muhokama-update/`)
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => {
    })
    .catch((err) => {
      console.log(err);
    })
  }, [materialId])
  
  
  function lookAtAction(){
    if (!auth?.accessToken || !materialId) return;
    fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/birlashma/material-detail/${materialId}/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.accessToken,
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => {
        setMaterial(data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
      });
  }
 
  useEffect(()=>{
    if (!auth?.accessToken || !materialId) return;
    lookAtAction()
  }, [auth?.accessToken, materialId])


  const socketUrl = `ws://192.168.101.174:3000/ws/notifications/?token=${auth?.accessToken}`;
  useEffect(() => {
    if (!auth.accessToken) return;
    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      // console.log("WebSocket ulanishi o'rnatildi");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // console.log("yangi notification:", data);
      lookAtAction()
    };

    socket.onerror = (error) => {
      // console.error("WebSocket yopildi:", error);
    };

    return () => {
      socket.close();
    };
  }, [auth?.accessToken]);

  // ==========================================
  const { data: user } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/user-data/`
  );

  function sendData(e) {
    e.preventDefault()
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
          lookAtAction()
        });
    }
  }

  useEffect(()=>{
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [Material?.muhokamalar])
  

  return (
    chatActiveModal && (
      <div className="modal">
        <div className="chat-container">
          <div className="head">
            <div className="meanAvatar">
              <div className="desc">
                <h3>Chat</h3>
              </div>
            </div>
            <IoClose
              style={{
                color: "cornflowerblue",
                fontSize: "24px",
                cursor: "pointer",
              }}
              onClick={() => setChatActiveModal(false)}
            />
          </div>
          {
            <div className="chat-body">
            {Material?.muhokamalar?.map((item) => {
              return (
                item.text && (
                  <div
                    key={item.id}
                    className={item.metodist?.id ? "message" : "message owner"}
                  >
                    <div className="messageInfo">
                      <img
                        src={
                          item.metodist?.id ? item.metodist?.image : user.image
                        }
                        alt=""
                      />
                    </div>
                    <div className="messageContent">
                      <p>
                        {
                          item.metodist && <span>{item.metodist?.first_name + " "+ item.metodist?.last_name}</span> 
                        }
                        {item.text}</p>
                    </div>
                  </div>
                )
              );
            })}
            <div ref={chatEndRef}/>
          </div>
          }
          
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
      </div>
    )
  );
}

export default ChatModal;

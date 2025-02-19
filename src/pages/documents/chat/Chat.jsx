import React, { useContext, useState } from "react";
import "./chat.scss";
import "react-chat-elements/dist/main.css";
import { MessageList, Input, Button, MessageBox } from "react-chat-elements";
import { AuthContext } from "../../../contexts/AuthContext";
import useGetFetchProfil from "../../../hooks/useGetFetchProfil";

function Chat({ userData }) {

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
    <div className="chat-container">
      <div className='head'>
        <div className="meanAvatar">
            <img src={userData?.image} alt="Avatar" />
            <div className="desc">
                <h3>{userData?.last_name + " " + userData?.first_name}</h3>
                { userData?.online ? <p>online</p> :  <p> {getLastSeen(userData?.last_seen)}</p>}
            </div>
        </div>
      </div>
        <div className='chat-body'>body</div>
        <div className='foot'>sent text feature</div>
    </div>
  );
}

export default Chat;

import React, { useContext, useState } from "react";
import logowhite from "../../../images/img/PTRI-new-logotype2-white.svg";
import "./TopNavbar.css";
import { NavLink } from "react-router-dom";
import DropDawnProfile from "./DropDawnProfile";
import user from "../../../images/img/username.png"
import { PiSignIn } from "react-icons/pi";
import { AuthContext } from "../../../contexts/AuthContext";



function TopNavbar() {
  const [openProfil, setOpinPofil] = useState(false);
  const {userName} = useContext(AuthContext)
  
  return (
    <div className="container">
      <div className="bar">
        <div className="logo">
          <NavLink to="/" className="logo-box">
            <div className="logo-img">
              <img src={logowhite} alt="rasm" />
            </div>
            <p className="logo-title">
              PROFESSIONAL TA'LIMNI <br /> RIVOJLANTIRISH <br /> INSTITUTI
            </p>
          </NavLink>
        </div>
        <div className="search">
          <input type="text" placeholder="izlash..." />
          <i className="bi bi-search"></i>
        </div>
        <div className="dropdowns">
          <div className="til">
            <select>
              <option value="O‘zbek tili">O‘zbek tili</option>
              <option value="Rus Til">Rus tili</option>
              <option value="Englis Til">Englis tili</option>
            </select>
          </div>
          <div className="kirish">
            <NavLink to='/regTeacherTitle' className="kirish-btn">
              <PiSignIn className="signIn"/>
              Kirish
            </NavLink>
          </div>
          <div className="userName" onClick={() => setOpinPofil((prev) => !prev)}>
            <div className="userimg">
              <img src={ userName ? `http://192.168.101.175:3000${userName.userImage}` : user} alt="rasm" />
            </div>
            <p>{ userName ? userName.name : "" }</p>
            {
              openProfil && <DropDawnProfile />
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;

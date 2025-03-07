import React, { useContext, useState } from "react";
import logowhite from "../../../images/img/PTRI-new-logotype2-white.svg";
import "./TopNavbar.css";
import { Link, NavLink } from "react-router-dom";
import DropDawnProfile from "./DropDawnProfile";
import userImageLocal from "../../../images/img/username.png";
import { PiSignIn } from "react-icons/pi";
import useGetFetchProfil from "../../../hooks/useGetFetchProfil";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AuthContext } from "../../../contexts/AuthContext";
import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { ImExit } from "react-icons/im";

function TopNavbar() {
  const [openProfil, setOpinPofil] = useState(false);
  const { logout } = useContext(AuthContext);
  const { data: user } = useGetFetchProfil(
    `${import.meta.env.VITE_BASE_URL}/user-data/`
  );

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
            <NavLink to="/regTeacherTitle" className="kirish-btn">
              <PiSignIn className="signIn" />
              Kirish
            </NavLink>
          </div>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon style={{ color: "white" }} />
            </Badge>
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, width: "50px", height: "50px" }}
              >
                <Avatar
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="Remy Sharp"
                  src={user?.image ? user.image : userImageLocal}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "50px", display: "block" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              MenuListProps={{
                sx: { display: "block" },
              }}
            >
              <MenuItem onClick={handleCloseUserMenu} sx={{ width: "150px" }}>
                <Typography sx={{ textAlign: "center", width: "100%" }}>
                  {user?.user_roles == "teacher" && (
                    <Link style={{width:"100%"}} to="/profil">
                      <FaUser />
                      Portfolio
                    </Link>
                  )}
                  {user?.user_roles == "metodist" && (
                    <Link to="/Document/documents">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-file-earmark-text"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                      </svg>
                      Hujjatlar
                    </Link>
                  )}
                </Typography>
                <Typography sx={{ textAlign: "center", width: "100%" }}>
                  <Link>
                    <CiSettings className="w-25px h-25px" />
                    Sozlamalar
                  </Link>
                </Typography>
                <Typography sx={{ textAlign: "center", width: "100%" }}>
                  <Link to="/login" onClick={logout}>
                    <ImExit className="w-25 h-25" />
                    Chiqish
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <div
            className="userName"
            onClick={() => setOpinPofil((prev) => !prev)}
          >
            <div className="userimg">
              <img src={user?.image ? user.image : userImageLocal} alt="rasm" />
            </div>
            <p>{user?.first_name ? user.first_name : ""}</p>
            {openProfil && <DropDawnProfile />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;

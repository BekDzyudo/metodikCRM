import React, { useContext, useEffect, useState } from "react";
import logowhite from "../../../images/img/PTRI-new-logotype2-white.svg";
import "./TopNavbar.css";
import { Link, NavLink } from "react-router-dom";
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
import { GrDocumentText } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import sound from "../../../images/img/notifSound.wav"

function TopNavbar() {
  const { auth, logout, MaterialMetod, lookAtActionMetodist } = useContext(AuthContext);
  
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
  // ==================================================

  const [anchorElNot, setAnchorElNot] = useState(null);
  const handleOpenNotMenu = (event) => {
    setAnchorElNot(event.currentTarget);
  };
  const handleCloseNotMenu = () => {
    setAnchorElNot(null);
  };
  // =================================================\
  useEffect(()=>{
      if (!auth?.accessToken) return;
      lookAtActionMetodist()
    }, [auth?.accessToken])

  const socketUrl = `ws://192.168.100.10/ws/notifications/?token=${auth?.accessToken}`;

  useEffect(() => {
    if (!auth.accessToken) return;

    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      // console.log("WebSocket ulanishi o'rnatildi");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      lookAtActionMetodist()
      console.log("sound play");
      // console.log("yangi notification:", data);
    };

    socket.onerror = (error) => {
      // console.error("WebSocket yopildi:", error);
    };

    return () => {
      socket.close();
    };
  }, [auth?.accessToken]);

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
          {
            auth.refreshToken ? <></> : <div className="kirish">
            <NavLink to="/login" className="kirish-btn">
              <PiSignIn className="signIn" />
              Kirish
            </NavLink>
          </div>
          }
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton
                onClick={handleOpenNotMenu}
                style={{ marginLeft: "10px", marginRight: "15px" }}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={MaterialMetod?.length} color="error">
                  <NotificationsIcon style={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Tooltip>
            {MaterialMetod?.length > 0 && (
              <Menu
                sx={{ mt: "50px", display: "block" }}
                id="menu-appbar"
                anchorEl={anchorElNot}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNot)}
                onClose={handleCloseNotMenu}
                MenuListProps={{
                  sx: { display: "block" },
                }}
              >
                {MaterialMetod &&
                  MaterialMetod?.map((item) => {
                    return (
                      <MenuItem
                        key={item.id}
                        onClick={handleCloseNotMenu}
                        sx={{ minWidth: "150px" }}
                      >
                        <Typography sx={{ textAlign: "center", width: "100%" }}>
                          <Link
                            to={`/Document/DocumentDetail/${item.material}`}
                          >
                            <span style={{ fontSize: "14px" }}>
                              {" "}
                              <span>
                                <FaCircle
                                  style={{
                                    color: "green",
                                    width: "10px",
                                    height: "10px",
                                  }}
                                />
                              </span>{" "}
                              {item.fan_name}
                            </span>
                          </Link>
                        </Typography>
                      </MenuItem>
                    );
                  })}
              </Menu>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, width: "50px", height: "50px" }}
              >
                <Avatar
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
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
              { 
                user?.user_roles && (
                  <MenuItem onClick={handleCloseUserMenu} sx={{ width: "150px" }}>
                <Typography sx={{ textAlign: "center", width: "100%" }}>
                  {user?.user_roles == "teacher" && (
                    <Link style={{ width: "100%" }} to="/profil">
                      <FaUser />
                      Portfolio
                    </Link>
                  )}
                  {user?.user_roles == "metodist" && (
                    <Link to="/Document/documents">
                      <GrDocumentText
                        style={{ width: "20px", height: "20px" }}
                      />
                      Hujjatlar
                    </Link>
                  )}
                </Typography>
              </MenuItem>
                )
              }
              <MenuItem onClick={handleCloseUserMenu} sx={{ width: "150px" }}>
                <Typography sx={{ textAlign: "center", width: "100%" }}>
                  <Link>
                    <CiSettings style={{ width: "20px", height: "20px" }} />
                    Sozlamalar
                  </Link>
                </Typography>
              </MenuItem>
              {
                user && (
                  <MenuItem onClick={handleCloseUserMenu} sx={{ width: "150px" }}>
                <Typography sx={{ textAlign: "center", width: "100%" }}>
                  <Link to="/login" onClick={logout}>
                    <ImExit style={{ width: "20px", height: "20px" }} />
                    Chiqish
                  </Link>
                </Typography>
              </MenuItem>
                )
              }
            </Menu>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;

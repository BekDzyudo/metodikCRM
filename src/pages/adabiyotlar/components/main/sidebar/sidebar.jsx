import React from "react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="talim_search">
        <input type="search" placeholder="izlash" />
      </div>
      <div className="sidebar">
        <NavLink
          to=""
          end
          className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
        >
          <p>Barchasi</p>
        </NavLink>
        <NavLink
          to="/b"
          className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
        >
          <p>Darsliklar</p>
        </NavLink>
        <NavLink
          to="/c"
          className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
        >
          <p>O‘quv qo‘llanmalar</p>
        </NavLink>
        <NavLink
          to="/d"
          className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
        >
          <p>Qo‘shimcha adabiyotlar</p>
        </NavLink>
        <NavLink
          to="/f"
          className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
        >
          <p>Badiiy adabiyotlar</p>
        </NavLink>
      </div>
    </div>
  );
}

import React from "react";
import { Link, NavLink } from "react-router-dom";

function MeyoriySidebar() {
  return (
    <div className="col-4 sidebar">
      <NavLink
        to="/MeyoriySahifa"
        end
        className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
      >
        <p>Prezident Farmonlari</p>
      </NavLink>
      <NavLink
        to="/MeyoriySahifa/vazirlarQarori"
        className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
      >
        <p>Vazirlar Mahkamasi qarorlari</p>
      </NavLink>
      <NavLink
        to="/MeyoriySahifa/vazirlarBuyrugi"
        className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
      >
        <p>Vazirlig buyruqlari ta'lim</p>
      </NavLink>
      <NavLink
        to="/MeyoriySahifa/nizomlar"
        className={({ isActive }) => (isActive ? "isActive" : "malumot_card")}
      >
        <p>Nizomlar</p>
      </NavLink>
    </div>
  );
}

export default MeyoriySidebar;

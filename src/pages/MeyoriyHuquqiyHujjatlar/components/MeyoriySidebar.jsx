import React from "react";
import { Link, NavLink } from "react-router-dom";

function MeyoriySidebar() {
  return (
    <div className="farmon_left">
      <div className="col">
        <div className="farmon_card">
          <NavLink to="/MeyoriySahifa" className="farmon_title">
            Prezident Farmonlari
          </NavLink>
          <NavLink to="/MeyoriySahifa/vazirlarQarori" className="farmon_title">
            Vazirlar Mahkamasi qarorlari
          </NavLink>
          <NavLink to="/MeyoriySahifa/vazirlarBuyrugi" className="farmon_title">
            Vazirlig buyruqlari ta'lim
          </NavLink>
          <NavLink to="/MeyoriySahifa/nizomlar" className="farmon_title">
            Nizomlar
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MeyoriySidebar;

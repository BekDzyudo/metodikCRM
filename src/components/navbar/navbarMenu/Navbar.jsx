import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav>
        <ul className="nav-menu links" id="nav">
          <li>
            <NavLink className="nav-link" to="/MeyoriySahifa">
              Me’yoriy hujjatlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/viloyatlar">
              Professional ta'lim muassasalari
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Talim-Standartlari-Fanlar">
              Ta'lim standartlari va fanlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/raqamli-talim-resurslari">
              Raqamli ta'lim resurslari
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Adabiyotlar">
              Adabiyotlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Yangiliklar">
              Yangiliklar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Contact">
              Bog‘lanish
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

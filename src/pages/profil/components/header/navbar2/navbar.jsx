import React from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className='profilHeader'>
            <ul className="nav-menu links" id="nav">
                <li>
                    <NavLink className="nav-link" to="/">
                        Biz haqimizda
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Meyoriy">
                        Me’yoriy-huquqiy hujjatlar
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Professional-Talim-Muassasalari">
                        Professional ta'lim muassasalari
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Talim">
                        Ta'lim standartlari va fanlar
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Adabiyot">
                        Adabiyotlar
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Yangilik">
                        Yangiliklar
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Bog‘lanish">
                        Bog‘lanish
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

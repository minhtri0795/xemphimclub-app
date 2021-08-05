import React from "react";
import "./NavBar.scss";
import logo from "../../images/logo-full.png";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/">
        <a className="logo" href="">
          <img src={logo} alt="logo" />
        </a>
      </NavLink>
      <ul className="menu">
        <li>
          <NavLink activeClassName="selected" to="/search">
            Tìm kiếm
          </NavLink>
        </li>
        <li key="movie">
          <NavLink activeClassName="selected" to="/type/movie">
            Phim lẻ
          </NavLink>
        </li>
        <li key="TV">
          <NavLink activeClassName="selected" to="/type/tv">
            Phim bộ
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

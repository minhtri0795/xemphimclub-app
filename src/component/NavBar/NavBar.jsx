import React, { useState } from "react";
import "./NavBar.scss";
import logo from "../../images/logo-full.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
function NavBar() {
  const [sidebar, setSideBar] = useState("");
  return (
    <>
      <div className="nav-bar">
        <div className="logo-wraper">
          <button
            onClick={() => {
              setSideBar("active");
            }}
            className="menu-btn"
          >
            {" "}
            <MenuIcon />
          </button>
          <NavLink to="/">
            <a className="logo" href="">
              <img src={logo} alt="logo" />
            </a>
          </NavLink>
        </div>
        <ul className="menu">
          <li>
            <NavLink activeClassName="selected" to="/search">
              <svg
                id="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
              </svg>
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
          <li key="FAQ">
            <NavLink activeClassName="selected" to="/FAQ">
              FAQ
            </NavLink>
          </li>
        </ul>
        <div className="colection">
          <p>
            <NavLink activeClassName="selected" to="/colection">
              Bộ sưu tập
            </NavLink>
          </p>
        </div>
      </div>
      <div className={`nav-bar-mobile ${sidebar}`}>
        <div
          onClick={() => {
            setSideBar("");
          }}
          className="back-drop"
        ></div>
        <button className="login">Đăng nhập</button>
        <a className="sign-up" href="#">
          Đăng kí
        </a>
        <hr />
        <ul className="menu-mobile">
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
          <li key="FAQ">
            <NavLink activeClassName="selected" to="/FAQ">
              FAQ
            </NavLink>
          </li>
          <li key="colection">
            <NavLink activeClassName="selected" to="/colection">
              Bộ sưu tập
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;

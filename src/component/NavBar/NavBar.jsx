import React from "react";
import "./NavBar.scss";
import logo from "../../images/logo-full.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <a className="logo" href="">
          <img src={logo} alt="logo" />
        </a>
      </Link>
      <ul className="menu">
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li key="movie">Movie</li>
        <li key="TV">TV shows</li>
        <li key="all">All Movie</li>
      </ul>
    </div>
  );
}

export default NavBar;

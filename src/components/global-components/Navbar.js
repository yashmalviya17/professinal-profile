import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    const innerHeight = window.innerHeight;
    // const path = window.location.pathname;
    if (window.scrollY >= innerHeight) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "navbar" : "navbar-scroll"}>
      <span>
        <img src={logo} alt="p-logo" />
      </span>
      <NavLink
        to="/"
        style={{ float: "right", padding: "5px 20px", color: "#332B2B" }}
      >
        <HiOutlineHome size="3rem" />
      </NavLink>
    </div>
  );
};

export default Navbar;

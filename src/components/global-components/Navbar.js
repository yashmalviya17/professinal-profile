import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenu } from "react-icons/hi";
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    const innerHeight = window.innerHeight;
    const path = window.location.pathname;
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
      <span style={{ float: "right", padding: "5px 20px" }}>
        <HiMenu size="3rem" />
      </span>
    </div>
  );
};

export default Navbar;

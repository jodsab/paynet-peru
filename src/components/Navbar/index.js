"use client";

import React, { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import "./styles.scss";

const NavBar = ({ onClick }) => {
  return (
    <div className="navbar_menu">
      <div className="mobile_component">
        <MobileMenu onClick={onClick} />
      </div>
      <div className="desktop_component">
        <DesktopMenu onClick={onClick} />
      </div>
    </div>
  );
};

export default NavBar;

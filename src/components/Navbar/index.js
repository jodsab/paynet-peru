"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./styles.scss";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <div className="navbar_container">
      <div className="navbar_header">
        <h4>PAYNET</h4>
        <button onClick={toggleMenu}>
          <label className="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </button>
      </div>

      {openMenu && (
        <div className="menu_backdrop" onClick={() => setOpenMenu(false)}></div>
      )}

      <div className={`toggle_menu ${openMenu ? "open" : "close"}`}>
        <button>Nosotros</button>
        <button>Funcionamiento</button>
        <button>Comisiones</button>
        <button>Blog</button>
        <div className="extra_menu">
          <button>Iniciar sesión</button>
          <button>Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

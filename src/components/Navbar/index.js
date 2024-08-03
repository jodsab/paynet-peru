"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import "./styles.scss";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="navbar_wrapper">
      <div className="navbar_container">
        <div className="navbar_header margin">
          <h4>PAYNET</h4>
          <button className="toggle_menu_button" onClick={toggleMenu}>
            {openMenu ? (
              <IoCloseOutline size={35} color="#014b8e" />
            ) : (
              <IoMdMenu size={35} color="#014b8e" />
            )}
          </button>
        </div>

        <div className={`toggle_menu ${openMenu ? "open" : "close"}`}>
          <button>
            <p>Nosotros</p>
          </button>
          <button>
            <p>Funcionamiento</p>
          </button>
          <button>
            <p>Comisiones</p>
          </button>
          <button>
            <p>Blog</p>
          </button>
          <div className="extra_menu">
            <button className="iniciar_sesion">Iniciar sesión</button>
            <button className="registrarse">Registrar</button>
          </div>
        </div>
      </div>

      {openMenu && <div className="backdrop" onClick={closeMenu}></div>}
    </div>
  );
};

export default NavBar;

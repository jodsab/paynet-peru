"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../Logo";
import "./styles.scss";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const MobileComponent = () => {
    return (
      <div className="navbar_wrapper">
        <div className="navbar_container">
          <div className="navbar_header content">
            <div className="logo">
              <Logo />
            </div>

            <button className="toggle_menu_button" onClick={toggleMenu}>
              {openMenu ? (
                <IoCloseOutline size={35} color="#014b8e" />
              ) : (
                <IoMdMenu size={35} color="#014b8e" />
              )}
            </button>
          </div>
          {openMenu && <div className="backdrop" onClick={closeMenu}></div>}
          <div className={`toggle_menu content ${openMenu ? "open" : "close"}`}>
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
              <button className="iniciar_sesion">
                <p>Iniciar sesión</p>
              </button>
              <button className="registrarse">
                <p>Registrar</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DesktopComponent = () => {
    return (
      <div className="desktop_menu_container content">
        <div className="navbar_header">
          <h4 className="logo">PAYNET</h4>
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
            <button className="iniciar_sesion">
              <p>Iniciar sesión</p>
            </button>
            <button className="registrarse">
              <p>Registrar</p>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="navbar_menu">
      <div className="mobile_component">
        <MobileComponent />
      </div>
      <div className="desktop_component">
        <DesktopComponent />
      </div>
    </div>
  );
};

export default NavBar;

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import ScrollToForm from "@/components/ScrollToForm";

const MobileMenu = ({ onClick }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeUrl, setActiveUrl] = useState("");

  const pathname = usePathname();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  console.log(pathname);

  useEffect(() => {
    setActiveUrl(pathname);
  }, [pathname]);
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
          <Link
            className={activeUrl == "/nosotros" ? "active" : "disabled"}
            href="/nosotros"
          >
            <p>Nosotros</p>
          </Link>
          <Link
            className={activeUrl == "/funcionamiento" ? "active" : "disabled"}
            href="/funcionamiento"
          >
            <p>Funcionamiento</p>
          </Link>
          <Link
            className={activeUrl == "/comisiones" ? "active" : "disabled"}
            href="/comisiones"
          >
            <p>Comisiones</p>
          </Link>

          {/* <Link
            className={activeUrl == "/blog" ? "active" : "disabled"}
            href="/blog"
          >
            <p>Blog</p>
          </Link> */}

          <div className="extra_menu">
            {/*               <Link href="/iniciar-sesion" className="iniciar_sesion">
              <p>Iniciar sesión</p>
            </Link>
            <Link href="/registrarse" className="registrarse">
              <p>Registrar</p>
            </Link> */}
            <ScrollToForm onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

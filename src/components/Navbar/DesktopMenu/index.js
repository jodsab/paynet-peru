import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import Link from "next/link";
import ScrollToForm from "@/components/ScrollToForm";

const DesktopMenu = ({ onClick }) => {
  const [activeUrl, setActiveUrl] = useState("");

  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    setActiveUrl(pathname);
  }, [pathname]);
  return (
    <div className="desktop_menu_container content">
      <div className="navbar_header">
        <Logo />
      </div>
      <div className={`toggle_menu`}>
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
        <ScrollToForm onClick={onClick} />
        {/*           <div className="extra_menu">
        <Link href="/iniciar-sesion" className="iniciar_sesion">
          <p>Iniciar sesión</p>
        </Link>
        <Link href="/registrarse" className="registrarse">
          <p>Registrar</p>
        </Link>
      </div> */}
      </div>
    </div>
  );
};

export default DesktopMenu;

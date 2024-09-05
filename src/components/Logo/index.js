import React from "react";
import Link from "next/link";
import PayNetOriginal from "./assets/PayNet color.png";
import PayNetBlanco from "./assets/PayNet blanco.png";
import PayNetNegro from "./assets/PayNet negro.png";
import "./styles.scss";
import Image from "next/image";

const Logo = ({ className }) => {
  return (
    <div className="logo_container">
      <Link href="/">
        <Image
          width={150}
          height={150}
          src={
            className === "blanco"
              ? PayNetBlanco
              : className === "negro"
              ? PayNetNegro
              : PayNetOriginal
          }
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;

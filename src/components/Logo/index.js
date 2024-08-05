import React from "react";
import Link from "next/link";
import "./styles.scss";

const Logo = () => {
  return (
    <div className="logo_container">
      <Link href="/">
        <h3 className="pay">PAY</h3>
        <h3 className="net">NET</h3>
      </Link>
    </div>
  );
};

export default Logo;

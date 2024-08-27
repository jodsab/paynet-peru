"use client";
import React, { useEffect } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./styles.scss";

const WithNavAndFooter = ({ onClick, children }) => {
  return (
    <div>
      <NavBar onClick={onClick} />
      <div className="body">{children}</div>
      <Footer />
    </div>
  );
};

export default WithNavAndFooter;

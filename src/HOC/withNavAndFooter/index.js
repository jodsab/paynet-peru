import React from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./styles.scss";

const WithNavAndFooter = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="body">{children}</div>
      <Footer />
    </div>
  );
};

export default WithNavAndFooter;

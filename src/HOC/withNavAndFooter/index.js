import React from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WithNavAndFooter = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default WithNavAndFooter;

import React from "react";
import "./styles.scss";

const WithBorder = ({ children }) => {
  return <div className="border">{children}</div>;
};

export default WithBorder;

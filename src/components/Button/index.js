import React from "react";
import "./styles.scss";

const Button = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default Button;

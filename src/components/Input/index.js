import React from "react";
import "./styles.scss";

const Input = ({ label, icon, placeholder, type }) => {
  return (
    <div className="input--main--container">
      {label && <p>{label}</p>}
      <div className="input--content--container">
        {icon && <p>{icon}</p>}
        <input placeholder={placeholder} type={type}></input>
      </div>
    </div>
  );
};

export default Input;

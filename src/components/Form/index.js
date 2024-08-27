"use client";
import React from "react";
import "./styles.scss";

const Form = ({ title, children }) => {
  return (
    <div className="form--main--container">
      <strong className="subtitle">{title}</strong>
      <div className="form--content--container">{children}</div>
    </div>
  );
};

export default Form;

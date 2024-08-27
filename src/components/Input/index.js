import React from "react";
import { Field } from "formik";
import "./styles.scss";

const Input = ({ name, label, type, icon, placeholder }) => {
  return (
    <div className="input--main--container">
      {label && <p>{label}</p>}
      <div className="input--content--container">
        {icon && <p>{icon}</p>}
        <Field name={name} placeholder={placeholder} type={type}></Field>
      </div>
    </div>
  );
};

export default Input;

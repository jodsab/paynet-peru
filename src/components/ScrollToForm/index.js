"use client";
import { useRef } from "react";

import "./styles.scss";

const ScrollToForm = ({ onClick }) => {
  return (
    <div className="contactanos_container">
      <button className="contactanos" onClick={onClick}>
        <p>Contáctanos</p>
      </button>
    </div>
  );
};

export default ScrollToForm;

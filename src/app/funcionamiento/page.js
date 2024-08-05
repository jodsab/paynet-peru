"use client";
import Sofa from "../assets/sofa.png";
import Image from "next/image";
import React, { useState } from "react";
import ComoFunciona from "@/components/ComoFunciona";
import WithBorder from "@/HOC/withBorder";
import FormContact from "./components/FormContact";
import WithNavAndFooter from "@/HOC/withNavAndFooter";
import "./index.scss";

const Accordion = ({ content, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={open ? "accordion--container open" : "accordion--container"}
      onClick={() => setOpen(!open)}
    >
      <div className="accordion--container--header">
        <p>{title}</p>
        <p>+</p>
      </div>
      <div className="accordion--container--content">{content}</div>
    </div>
  );
};

export default function Funcionamiento() {
  return (
    <main>
      <WithNavAndFooter>
        <div className="function--container">
          <div className="function--container--content ">
            <div className="banner--container content">
              <div className="banner--left--container">
                <strong className="title">CONOCE CÓMO TE AYUDAMOS</strong>
                <div className="banner--buttons--container">
                  <button
                    className="button--container button--container--secondary"
                    type="button"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    className="button--container button--container--primary"
                    type="button"
                  >
                    Contacto
                  </button>
                </div>
              </div>
              <Image width={320} height={320} src={Sofa} />
            </div>
            <div className="how--container">
              <div className="how--container-content content">
                <ComoFunciona />
              </div>
            </div>
            <div className="function--help--container ">
              <div className="function--help--content--container content">
                <strong className="title"> PREGUNTAS FRECUENTES</strong>
                <div className="function--help--accordion">
                  <Accordion
                    title="¿Cómo me afilio a PayNet?"
                    content={
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Sed curabitur
                          feugiat nibh.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Sed curabitur
                          feugiat nibh.
                        </li>
                      </ul>
                    }
                  />
                  <Accordion
                    title="¿Qué beneficios tendré al afiliarme a PayNet?"
                    content={
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Sed curabitur
                          feugiat nibh.
                        </li>
                      </ul>
                    }
                  />
                  <Accordion
                    title="¿Es seguro usar PayNet?"
                    content={
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Sed curabitur
                          feugiat nibh.
                        </li>
                      </ul>
                    }
                  />
                  <Accordion
                    title="¿Quienes respaldan a PayNet?"
                    content={
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Sed curabitur
                          feugiat nibh.
                        </li>
                      </ul>
                    }
                  />
                  <Accordion
                    title="¿Existe algun costo por afiliarme a PayNet?"
                    content={
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Sed curabitur
                          feugiat nibh.
                        </li>
                      </ul>
                    }
                  />
                </div>
              </div>
            </div>
            <FormContact />
          </div>
        </div>
      </WithNavAndFooter>
    </main>
  );
}

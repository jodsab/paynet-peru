"use client";
import NavBar from "@/components/Navbar";
import Sofa from "../assets/sofa.png";
import Image from "next/image";
import Step from "../assets/step.jpg";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import WithBorder from "@/HOC/withBorder";
import FormContact from "./components/FormContact";
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
      <NavBar />
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
              <WithBorder>
                <div className="how--container--info ">
                  <strong className="title">¿CÓMO FUNCIONA PAYNET?</strong>
                  <p className="subtitle">
                    PayNet: Finanzas intuitivas a tu medida
                  </p>
                  <div className="how--slide--container">
                    <div className="option active">Billetera digital</div>
                    <div className="option">Plataforma digital</div>
                  </div>
                  <div className="how--steps--container">
                    <div className="how--step--container">
                      <Image width={320} height={320} src={Step} />
                      <div className="how--step--layout">
                        <strong className="subtitle">
                          1. ACCESO A LA APLICACIÓN
                        </strong>
                        <p>Abre la aplicación de tu banca móvil</p>
                        <div className="how--step--buttons">
                          <button
                            className="button--container button--container--secondary"
                            type="button"
                          >
                            Registrar
                          </button>
                          <button
                            className="button--container button--container--primary"
                            type="button"
                          >
                            Contacto
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="how--step--container">
                      <Image width={320} height={320} src={Step} />
                      <div className="how--step--layout">
                        <strong className="subtitle">
                          2. DETALLES DEL PAGO
                        </strong>
                        <p>Elige la opcion pago de servicios.</p>
                        <div className="how--step--buttons">
                          <button
                            className="button--container button--container--secondary"
                            type="button"
                          >
                            Registrar
                          </button>
                          <button
                            className="button--container button--container--primary"
                            type="button"
                          >
                            Contacto
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="how--step--container">
                      <Image width={320} height={320} src={Step} />
                      <div className="how--step--layout">
                        <strong className="subtitle">
                          3. ELEGIR DESTINATARIO
                        </strong>
                        <p>
                          Selecciona LatinPay como el destinatario para tu pago.
                        </p>
                        <div className="how--step--buttons">
                          <button
                            className="button--container button--container--secondary"
                            type="button"
                          >
                            Registrar
                          </button>
                          <button
                            className="button--container button--container--primary"
                            type="button"
                          >
                            Contacto
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="how--step--container">
                      <Image width={320} height={320} src={Step} />
                      <div className="how--step--layout">
                        <strong className="subtitle">
                          4. DETALLES DE LA BOLETA
                        </strong>
                        <p>
                          Ingresa la información requerida para el pago, como el
                          monto y el código de comercio.
                        </p>
                        <div className="how--step--buttons">
                          <button
                            className="button--container button--container--secondary"
                            type="button"
                          >
                            Registrar
                          </button>
                          <button
                            className="button--container button--container--primary"
                            type="button"
                          >
                            Contacto
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="how--step--container">
                      <Image width={320} height={320} src={Step} />
                      <div className="how--step--layout">
                        <strong className="subtitle">
                          5. VERIFÍCA EL PAGO
                        </strong>
                        <p>
                          Verifica y autoriza la transacción, y luego recibe la
                          confirmación.
                        </p>
                        <div className="how--step--buttons">
                          <button
                            className="button--container button--container--secondary"
                            type="button"
                          >
                            Registrar
                          </button>
                          <button
                            className="button--container button--container--primary"
                            type="button"
                          >
                            Contacto
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </WithBorder>
            </div>
          </div>
          <div className="function--help--container ">
            <div className="function--help--content--container content">
              <strong className="title"> PREGUNTAS FRECUENTES</strong>
              <div className="function--help--accordion">
                <Accordion
                  title="¿Cómo me afilio a LatinPay?"
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
                  title="¿Qué beneficios tendré al afiliarme a LatinPay?"
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
                  title="¿Es seguro usar LatinPay?"
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
                  title="¿Quienes respaldan a LatinPay?"
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
                  title="¿Existe algun costo por afiliarme a LatinPay?"
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
      <Footer />
    </main>
  );
}

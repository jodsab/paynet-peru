"use client";
import NavBar from "@/components/Navbar";
import Sofa from "../assets/sofa.png";
import Image from "next/image";
import { MdEmail, MdOutlineSmartphone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Step from "../assets/step.jpg";
import Phone from "../assets/phone.png";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Input from "@/components/Input";
import "./index.scss";
import TextArea from "antd/es/input/TextArea";

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
          <div className="banner--container">
            <div className="banner--left--container">
              <strong className="subtitle">CONOCE CÓMO TE AYUDAMOS</strong>
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
            <strong className="subtitle">¿CÓMO FUNCIONA PAYNET?</strong>
            <p>PayNet: Finanzas intuitivas a tu medida</p>
            <div className="how--slide--container">
              <div className="option active">Billetera digital</div>
              <div className="option">Plataforma digital</div>
            </div>
            <div className="how--steps--container">
              <div className="how--step--container">
                <Image width={320} height={320} src={Step} />
                <div className="how--step--layout">
                  <strong>1. Acceso a la aplicación</strong>
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
                  <strong>2. Detalles del Pago</strong>
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
                  <strong>3. Elegir destinatario</strong>
                  <p>Selecciona LatinPay como el destinatario para tu pago.</p>
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
                  <strong>4. Detalles del Pago</strong>
                  <p>
                    Ingresa la información requerida para el pago, como el monto
                    y el código de comercio.
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
                  <strong>5. Verifíca el pago</strong>
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
          <strong className="subtitle margin"> PREGUNTAS FRECUENTES</strong>
          <div className="function--help margin">
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
          <p className="margin">
            <strong className="subtitle">HABLEMOS DEL FUTURO</strong>
            <span>
              PayNet, cree en el poder de conectar. Rellena este formulario y
              conversemos.
            </span>
          </p>
          <div className="function--form--contact--us">
            <Form title="Llena el formulario y estaremos contactándonos contigo.">
              <Input
                label="Nombre"
                type="text"
                placeholder="Nombre de la persona"
                icon={<FaUser />}
              />
              <Input
                label="Correo"
                type="text"
                placeholder="correo@ejemplo.com"
                icon={<MdEmail />}
              />
              <Input
                type="text"
                label="Teléfono"
                placeholder="Teléfono"
                icon={<MdOutlineSmartphone />}
              />

              <p>Mensaje</p>
              <textarea />
              <div className="tyc--checkbox">
                <input type="checkbox"></input>
                <p>
                  Autorizo el tratamiento de mis datos personales con fines
                  publicitarios
                </p>
              </div>
              <button
                className="button--container button--container--secondary"
                type="button"
              >
                Enviar
              </button>
            </Form>
            <Image
              className="form--hero--image"
              width={700}
              height={700}
              src={Phone}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

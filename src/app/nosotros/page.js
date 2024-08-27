"use client";
import { useEffect, useRef } from "react";
import WithNavAndFooter from "@/HOC/withNavAndFooter";
import WithBorder from "@/HOC/withBorder";
import Beneficios from "@/components/Beneficios";
import Button from "@/components/Button";
import calendar from "./assets/calendar.png";
import Image from "next/image";
import FormContact from "../funcionamiento/components/FormContact";
import ScrollToForm from "@/components/ScrollToForm";
import Aos from "aos";
import "aos/dist/aos.css";

import "./index.scss";

export default function Nosotros() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <WithNavAndFooter onClick={scrollToSection}>
        <div className="nosotros_container content">
          <div data-aos="fade-right">
            <h1>PLANIFICA CON PAYNET</h1>
          </div>
          <div className="nosotros_container">
            <WithBorder>
              <div className="nosotros_border">
                <div data-aos="fade-left">
                  <Image
                    className="img_calendar"
                    src={calendar}
                    width={"100%"}
                    height={450}
                    alt="calendar"
                  />
                </div>
                <div data-aos="fade-right">
                  <p className="subtitle">Págos fáciles y seguros</p>
                </div>
                <div data-aos="fade-up">
                  <Button
                    onClick={scrollToSection}
                    className="blue"
                    text="Conoce mas"
                  />
                </div>
              </div>
            </WithBorder>
            <div data-aos="fade-up">
              <Beneficios />
            </div>
          </div>
          <WithBorder>
            <div data-aos="fade-up">
              <h2 className="title">¿QUÉ ES PAYNET?</h2>
              <div className="cards">
                <div className="card">
                  <p className="backblue">SOBRE PAYNET</p>
                  <p>
                    Somos una <strong>Fintech 100% digital</strong> que conecta
                    emprendimientos en busca de
                    <strong> tarifas bajas y seguridad</strong> en cobros con
                    tarjeta de crédito/débito con clientes que desean realizar
                    pagos seguros.
                  </p>
                </div>
                <div className="card">
                  <p className="backblue">LEGAL Y REGULATORIO</p>
                  <p>
                    PayNet, razón social <strong>RUC</strong> que conecta
                    emprendimientos en busca de
                    <strong> tarifas bajas y seguridad</strong>
                  </p>
                </div>
              </div>
            </div>
          </WithBorder>
          {/*           <WithBorder>
            <h2 className="title">NUESTROS PILARES HUMANOS</h2>
          </WithBorder> */}
          <div className="light">
            <h2 className="title">
              TRANSACCIONES SEGURAS EN LA PALMA DE TU MANO
            </h2>
            <p>Regístrate en PayNet y Experimenta la Comodidad y Seguridad</p>
            <div className="buttons">
              {/*               <Button className="orange" text="Iniciar Sesion" />
              <Button className="blue" text="Contacto" /> */}
              <ScrollToForm onClick={scrollToSection} />
            </div>
          </div>
          <div ref={sectionRef}>
            <FormContact />
          </div>
        </div>
      </WithNavAndFooter>
    </main>
  );
}

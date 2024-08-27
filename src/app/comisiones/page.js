"use client";
import { useRef, useEffect } from "react";
import WithNavAndFooter from "@/HOC/withNavAndFooter";
import TablaDeComisiones from "@/components/TablaDeComisiones";
import FormContact from "../funcionamiento/components/FormContact";
import Button from "@/components/Button";
import Image from "next/image";
import ScrollToForm from "@/components/ScrollToForm";
import stairs from "./assets/stairs.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "./index.scss";

export default function Comisiones() {
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
        <div className="comisiones_container content">
          <div className="comisiones_content">
            <div data-aos="fade-right">
              <h1>COMISIONES JUSTAS Y ESCALABLES</h1>
            </div>
            <div data-aos="fade-right">
              <p className="subtitle">
                En PayNet, pagas solo por lo que transaccionas.
              </p>
            </div>
            <Image
              className="escaleras"
              src={stairs}
              height={400}
              width={"100%"}
              alt="Escalonable"
            />
            <div className="buttons">
              <ScrollToForm onClick={scrollToSection} />
              {/* <Button className="orange" text="Iniciar  sesión" />
              <Button className="blue" text="Contacto" /> */}
            </div>
          </div>
          <div data-aos="fade-up">
            <TablaDeComisiones onClick={scrollToSection} />
          </div>
          <div ref={sectionRef}>
            <FormContact />
          </div>
        </div>
      </WithNavAndFooter>
    </main>
  );
}

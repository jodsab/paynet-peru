"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import WithBorder from "@/HOC/withBorder";
import Beneficios from "@/components/Beneficios";
import WithNavAndFooter from "@/HOC/withNavAndFooter";
import TablaDeComisiones from "@/components/TablaDeComisiones";
import FormContact from "./funcionamiento/components/FormContact";
import ComoFunciona from "@/components/ComoFunciona";
import ScrollToForm from "@/components/ScrollToForm";
import human from "./assets/human.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "./index.scss";

export default function Home() {
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
        <div className="home_container">
          <div className="home_content content">
            <div data-aos="fade-right">
              <h1>TRANSACCIONES DIRECTAS EN LA PALMA DE TU MANO</h1>
            </div>
            <WithBorder>
              <div className="top_border">
                <div data-aos="fade-right">
                  <p className="subtitle">Pagos fáciles y seguros</p>
                </div>

                <div className="fixed">
                  <div data-aos="fade-left">
                    <Image
                      width={350}
                      height={"100%"}
                      src={human}
                      alt="human"
                    />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <ScrollToForm onClick={scrollToSection} />
              </div>
              {/*               <div className="buttons">
                <button className="primary_login">
                  <p>Iniciar sesión</p>
                </button>
                <button className="secondary_contact">
                  <p>Contacto</p>
                </button>
              </div> */}
            </WithBorder>
            <div data-aos="fade-up">
              <Beneficios />
            </div>
            <div data-aos="fade-up">
              <TablaDeComisiones onClick={scrollToSection} />
            </div>
            <div data-aos="fade-up">
              <ComoFunciona />
            </div>
            <div ref={sectionRef}>
              <FormContact />
            </div>
          </div>
        </div>
      </WithNavAndFooter>
    </main>
  );
}

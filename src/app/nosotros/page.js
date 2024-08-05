import WithNavAndFooter from "@/HOC/withNavAndFooter";
import WithBorder from "@/HOC/withBorder";
import Beneficios from "@/components/Beneficios";
import Button from "@/components/Button";
import calendar from "./assets/calendar.png";
import Image from "next/image";
import FormContact from "../funcionamiento/components/FormContact";

import "./index.scss";

export default function Nosotros() {
  return (
    <main>
      <WithNavAndFooter>
        <div className="nosotros_container content">
          <h1>PLANIFICA CON PAYNET</h1>
          <div className="nosotros_container">
            <WithBorder>
              <div className="nosotros_border">
                <Image
                  className="img_calendar"
                  src={calendar}
                  width={"100%"}
                  height={450}
                  alt="calendar"
                />
                <p className="subtitle">Págos fáciles y seguros</p>
                <Button className="blue" text="Conoce mas"></Button>
              </div>
            </WithBorder>
            <Beneficios />
          </div>
          <WithBorder>
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
              <Button className="orange" text="Iniciar Sesion"></Button>
              <Button className="blue" text="Contacto"></Button>
            </div>
          </div>
          <FormContact />
        </div>
      </WithNavAndFooter>
    </main>
  );
}

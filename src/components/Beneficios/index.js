import React from "react";
import WithBorder from "@/HOC/withBorder";
import Image from "next/image";
import stadistics from "./assets/stadistics.png";
import versatil from "./assets/versatil.png";
import seguro from "./assets/seguro.png";
import comodo from "./assets/comodo.png";
import accesible from "./assets/accesible.png";
import human from "./assets/human.png";
import "./styles.scss";

const Beneficios = () => {
  return (
    <WithBorder>
      <div className="benefits">
        <h3 className="sub">BENEFICIOS DISEÑADOS PARA TI</h3>
        <Image height={280} width={280} src={stadistics} alt="Estadisticas" />
      </div>
      <div className="areas">
        <div className="area">
          <div className="suba">
            <Image width={50} height={50} src={versatil} alt="versatil" />
            <h6>VERSÁTIL</h6>
          </div>
          <div>
            <p>
              PayNet ofrece flexibilidad con su diversa red de bancos y sistemas
              de pago.
            </p>
          </div>
        </div>
        <div className="area">
          <div className="suba">
            <Image width={50} height={50} src={seguro} alt="seguro" />
            <h6>SEGURO</h6>
          </div>
          <div>
            <p>
              Seguridad avanzada como la validación biométrica y protocolos de
              PLAFT.
            </p>
          </div>
        </div>
        <div className="area">
          <div className="suba">
            <Image width={50} height={50} src={comodo} alt="comodo" />
            <h6>CÓMODO</h6>
          </div>
          <div>
            <p>
              Realiza transacciones fácilmente con PayNet, en cualquier momento
              y lugar.
            </p>
          </div>
        </div>
        <div className="area">
          <div className="suba">
            <Image width={50} height={50} src={accesible} alt="accesible" />
            <h6>ACCESIBLE</h6>
          </div>
          <div>
            <p>
              Accede a PayNet desde cualquier dispositivo - tabletas, celulares
              y PCs.
            </p>
          </div>
        </div>
      </div>
    </WithBorder>
  );
};

export default Beneficios;

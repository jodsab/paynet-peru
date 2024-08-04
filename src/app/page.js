import Image from "next/image";
import WithBorder from "@/HOC/withBorder";
import NavBar from "@/components/Navbar";
import Beneficios from "@/components/Beneficios";
import WithNavAndFooter from "@/HOC/withNavAndFooter";
import TablaDeComisiones from "@/components/TablaDeComisiones";

import stadistics from "./assets/stadistics.png";
import versatil from "./assets/versatil.png";
import seguro from "./assets/seguro.png";
import comodo from "./assets/comodo.png";
import accesible from "./assets/accesible.png";
import human from "./assets/human.png";

import "./index.scss";

export default function Home() {
  return (
    <main>
      <WithNavAndFooter>
        <div className="home_container">
          <div className="home_content content">
            <h1>TRANSACCIONES DIRECTAS EN LA PALMA DE TU MANO</h1>
            <WithBorder>
              <div className="top_border">
                <p className="subtitle">Pagos fáciles y seguros</p>
                <div className="fixed">
                  <Image width={150} height={"100%"} src={human} alt="human" />
                </div>
              </div>
              <div className="buttons">
                <button className="primary_login">
                  <p>Iniciar sesión</p>
                </button>
                <button className="secondary_contact">
                  <p>Contacto</p>
                </button>
              </div>
            </WithBorder>
            <Beneficios />
            <TablaDeComisiones />
          </div>
        </div>
      </WithNavAndFooter>
    </main>
  );
}

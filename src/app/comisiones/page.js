import WithNavAndFooter from "@/HOC/withNavAndFooter";
import TablaDeComisiones from "@/components/TablaDeComisiones";
import FormContact from "../funcionamiento/components/FormContact";
import Button from "@/components/Button";
import Image from "next/image";
import stairs from "./assets/stairs.png";

import "./index.scss";

export default function Comisiones() {
  return (
    <main>
      <WithNavAndFooter>
        <div className="comisiones_container content">
          <div className="comisiones_content">
            <h1>COMISIONES JUSTAS Y ESCALABLES</h1>
            <p className="subtitle">
              En PayNet, pagas solo por lo que transaccionas.
            </p>
            <Image
              className="escaleras"
              src={stairs}
              height={400}
              width={"100%"}
              alt="Escalonable"
            />
            <div className="buttons">
              <Button className="orange" text="Iniciar  sesión" />
              <Button className="blue" text="Contacto" />
            </div>
          </div>
          <TablaDeComisiones />
          <FormContact />
        </div>
      </WithNavAndFooter>
    </main>
  );
}

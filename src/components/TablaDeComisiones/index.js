import React from "react";
import "./styles.scss";
import WithBorder from "@/HOC/withBorder";

const TablaDeComisiones = () => {
  return (
    <WithBorder>
      <div className="tabla_de_comisiones_container">
        <div className="tabla_head">
          <h3 className="title">TABLA DE COMISIONES</h3>
          <p>
            Invierte en el crecimiento de tu negocio con nuestras comisiones mas
            bajas del mercado.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <h2>NEGOCIOS EN ASCENSO</h2>
            <span className="minorista">MINORISTA</span>
            <div className="line"></div>
            <p className="micros">Microempresas e independientes</p>
            <ul>
              <li>
                <p>
                  <span className="circles"></span>Ideal si tus ventas son hasta
                  S/10,000 al mes.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Gestión de retiros en menos
                  de 24 horas*.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Acceso a cobros desde los
                  principales bancos.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Sin necesidad de P.O.S.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>La tarifa más baja del
                  mercado.
                </p>
              </li>
            </ul>
            <div className="interes">
              <p className="porcentaje">1.5%</p>
              <p className="text">Incl. IGV por transacción</p>
            </div>
            <button className="btn_registrarse">
              <p>REGISTRARSE</p>
            </button>
          </div>
          <div className="bluecard card">
            <h2>CAMPEONES COMERCIALS</h2>
            <span className="minorista">MAYORISTA</span>
            <div className="line"></div>
            <p className="micros">Pequeñas Empresas</p>
            <ul>
              <li>
                <p>
                  <span className="circles"></span>Perfecto para ventas de hasta
                  S/50,000 al mes.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Gestión de retiros en menos
                  de 24 horas*.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Acceso a cobros desde los
                  principales bancos.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Sin necesidad de P.O.S.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>La tarifa más baja del
                  mercado.
                </p>
              </li>
            </ul>
            <div className="interes">
              <p className="porcentaje">1%</p>
              <p className="text">Incl. IGV por transacción</p>
            </div>
            <button className="btn_registrarse">
              <p>REGISTRARSE</p>
            </button>
          </div>
          <div className="card">
            <h2>COLOSOS DEL COMERCIO</h2>
            <span className="minorista">CORPORATIVO</span>
            <div className="line"></div>
            <p className="micros">Grandes Empresas</p>
            <ul>
              <li>
                <p>
                  <span className="circles"></span>Si posees ventas mayores a
                  S/50,000 al mes.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Gestión de retiros en menos
                  de 24 horas*.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Acceso a cobros desde los
                  principales bancos.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>Sin necesidad de P.O.S.
                </p>
              </li>
              <li>
                <p>
                  <span className="circles"></span>La tarifa más baja del
                  mercado.
                </p>
              </li>
            </ul>
            <div className="interes">
              <p className="porcentaje">0.6%</p>
              <p className="text">Incl. IGV por transacción</p>
            </div>
            <button className="btn_registrarse">
              <p>REGISTRARSE</p>
            </button>
          </div>
        </div>
      </div>
    </WithBorder>
  );
};

export default TablaDeComisiones;

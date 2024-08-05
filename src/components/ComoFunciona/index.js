"use client";
import React, { useState } from "react";
import WithBorder from "@/HOC/withBorder";
import "./styles.scss";

const ComoFunciona = () => {
  const [option, setOption] = useState(1);
  return (
    <WithBorder>
      <div className="how--container--info ">
        <strong className="title">¿CÓMO FUNCIONA PAYNET?</strong>
        <p className="subtitle">PayNet: Finanzas intuitivas a tu medida</p>
        <div className="how--slide--container">
          <div
            className={`${option === 1 ? "option active" : "option"} `}
            onClick={() => setOption(1)}
          >
            Billetera digital
          </div>
          <div
            className={`${option === 2 ? "option active" : "option"} `}
            onClick={() => setOption(2)}
          >
            Plataforma digital
          </div>
        </div>
        <div className="how--steps--container">
          <div className="how--step--container">
            <video key={`video${option}`} autoPlay loop muted>
              <source src={`./video${option}.mp4`} type="video/mp4"></source>
            </video>
            <div className="how--step--layout">
              <strong className="subtitle">1. ACCESO A LA APLICACIÓN</strong>
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
            <video key={`video${option}`} autoPlay loop muted>
              <source src={`./video${option}.mp4`} type="video/mp4"></source>
            </video>
            <div className="how--step--layout">
              <strong className="subtitle">2. DETALLES DEL PAGO</strong>
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
            <video key={`video${option}`} autoPlay loop muted>
              <source src={`./video${option}.mp4`} type="video/mp4"></source>
            </video>
            <div className="how--step--layout">
              <strong className="subtitle">3. ELEGIR DESTINATARIO</strong>
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
            <video key={`video${option}`} autoPlay loop muted>
              <source src={`./video${option}.mp4`} type="video/mp4"></source>
            </video>
            <div className="how--step--layout">
              <strong className="subtitle">4. DETALLES DE LA BOLETA</strong>
              <p>
                Ingresa la información requerida para el pago, como el monto y
                el código de comercio.
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
            <video key={`video${option}`} autoPlay loop muted>
              <source src={`./video${option}.mp4`} type="video/mp4"></source>
            </video>
            <div className="how--step--layout">
              <strong className="subtitle">5. VERIFÍCA EL PAGO</strong>
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
  );
};

export default ComoFunciona;

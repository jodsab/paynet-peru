import React from "react";
import Image from "next/image";
import { MdEmail, MdOutlineSmartphone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Phone from "../../../assets/phone.png";
import "./index.scss";

const FormContact = () => {
  return (
    <div className="function--form--contact--us--container">
      <div className="function--form--contact--us--content--container content">
        <strong className="title">HABLEMOS DEL FUTURO</strong>
        <p className="subtitle">
          PayNet, cree en el poder de conectar. Rellena este formulario y
          conversemos.
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
        </div>
      </div>
      <Image
        className="form--hero--image"
        width={700}
        height={700}
        src={Phone}
      />
    </div>
  );
};

export default FormContact;

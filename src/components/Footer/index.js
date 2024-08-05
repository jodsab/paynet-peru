import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareTwitter,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer--main--container">
      <h2 className="title-fake">PAYNET</h2>
      <ul className="footer--about--us--container">
        <li>
          <h2>PAYNET</h2>
          <ul className="footer--social--links--container">
            <li>
              <a href="">
                <FaSquareFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaSquareTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaSquareWhatsapp />
              </a>
            </li>
          </ul>
        </li>

        <li>
          <p>
            <b>Nosotros</b>
          </p>
          <p>Funcionamiento</p>
          <p>Comisiones</p>
          <p>Blog</p>
        </li>
        <li>
          <p>
            <b>Contáctanos</b>
          </p>
          <p>
            <BsFillTelephoneFill />
            <span>+511 739 0850</span>
          </p>
          <p>
            <IoLocationSharp />
            <span>Calle German Schreiber 276, San Isidro, Lima</span>
          </p>
          <p>
            <MdEmail />
            <span>operaciones@PayNet.pe</span>
          </p>
        </li>
        <li>
          <p>
            <b>Información legal</b>
          </p>
          <p>Términos y condiciones</p>
          <p>Políticas de privacidad</p>
          <p>Libro de Reclamaciones</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

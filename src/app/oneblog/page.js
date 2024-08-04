import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCalendarAlt } from "react-icons/fa";
import NewImage from "../assets/venezuela.png";
import Avatar from "../assets/avatar.jpg";
import "./index.scss";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";

export default function OneBlog() {
  return (
    <main>
      <NavBar />
      <div className="one--blog--container">
        <div className="one--blog--main--container margin">
          <strong className="subtitle">
            ¿Cómo consultar las actas del CNE? LINK para verificar los votos con
            número de cédula, según María Corina Machado
          </strong>
          <p>
            Revisa AQUÍ cómo ver las actas de las Elecciones en el CNE. Haz la
            consulta con cédula y verifica los votos de los comicios del domingo
            28 de julio mediante la página web de María Corina Machado.
          </p>
          <div className="one--blog--hero--new">
            <div className="one--blog--new--content--container">
              <div className="one--blog--new--image--container">
                <Image width={500} src={NewImage} />
                <div className="one--blog--new--image--caption">
                  <p>
                    El link te permite ver las actas de las Elecciones en el
                    CNE, cuya página web está caída. Foto: composición LR/María
                    Corina Machado/Edmundo González
                  </p>
                </div>
              </div>

              <div className="one--blog--info--container">
                <div className="one--blog--author--info">
                  <div className="one--blog--author--avatar">
                    <Image width={80} src={Avatar} />
                  </div>
                  <div className="one--blog--author--info">
                    <strong>Zagala Hernandez, Carlos</strong>
                    <p>
                      {" "}
                      <FaCalendarAlt /> Publicado el Mar 23,2018
                    </p>
                  </div>
                </div>
                <strong className="one--blog--title--short">
                  ¿Cómo consultar las actas del CNE? LINK para verificar los
                  votos con número de cédula, según María Corina Machado
                </strong>
                <p>
                  Anota cómo ver las actas de las Elecciones en el CNE. Luego de
                  concretarse el fraude en Venezuela, María Corina Machado
                  dispuso de un link en el que los ciudadanos podrán verificar
                  los votos. En vista de que no hay otra forma de revisar los
                  resultados, la líder opositora puso en marcha una plataforma
                  en la que todos y todas podrán seguir el escrutinio de los
                  comicios. El proceso es sencillo y solo necesitas de tu
                  cédula. A continuación, te explicamos cómo ver las actas de
                  las Elecciones en el CNE. Haz la consulta con cédula a través
                  del link de María Corina Machado y verifica los votos.
                </p>
                <div className="one--blog--categories">
                  <div className="one--blog--category">
                    <p>Política</p>
                  </div>
                  <div className="one--blog--category">
                    <p>Actualidad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="one--blog--related--news">
              <b>Noticias relacionadas</b>
              <div className="one--blog--related--news--list">
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

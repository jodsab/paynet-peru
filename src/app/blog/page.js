import Stadistics from "../assets/stadistics.png";
import Image from "next/image";
import "./index.scss";
import BlogCard from "@/components/BlogCard";
import WithNavAndFooter from "@/HOC/withNavAndFooter";

export default function Blog() {
  return (
    <main>
      <WithNavAndFooter>
        <div className="blog--main--container">
          <div className="blog--main--content--container content">
            <div className="blog--banner">
              <div className="blog--banner--left">
                <strong className="title">BIENVENIDOS A PAYNET</strong>
                <p className="subtitle">
                  Innovación financiera al alcance de tus manos.
                </p>
                <div className="blog--banner--buttons">
                  <button
                    className="button--container button--container--secondary"
                    type="button"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    className="button--container button--container--primary"
                    type="button"
                  >
                    Contacto
                  </button>
                </div>
              </div>
              <Image width={400} height={400} src={Stadistics} />
            </div>
            <div className="blog--purpose--container">
              <div className="blog--purpose--content--container">
                <strong className="title">ACCIONES CON PROPÓSITO</strong>
                <p className="subtitle">
                  Sumérgete en PayNet: Innovación financiera y emprderoa
                </p>
                <div className="blog--news--lists">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                </div>
                <div className="blog--news--pagination">
                  <p>Anterior</p>
                  <ul>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
                  <p>Siguiente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WithNavAndFooter>
    </main>
  );
}

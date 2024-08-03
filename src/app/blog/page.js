import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stadistics from "../assets/stadistics.png";
import Image from "next/image";
import "./index.scss";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <main>
      <NavBar />
      <div className="blog--main--container">
        <div className="blog--main--content--container margin">
          <div className="blog--banner">
            <div className="blog--banner--left">
              <strong className="subtitle">BIENVENIDOS A PAYNET</strong>
              <p>Innovación financiera al alcance de tus manos.</p>
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
          <strong className="subtitle">ACCIONES CON PROPÓSITO</strong>
          <p>Sumérgete en PayNet: Innovación financiera y emprderoa</p>
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
      <Footer />
    </main>
  );
}

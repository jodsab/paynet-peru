import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import Noticia from "../../../src/app/assets/step.jpg";
import Image from "next/image";

import "./styles.scss";

const BlogCard = () => {
  return (
    <div className="blog--card--main--container">
      <div className="blog--card--image--container">
        <Image width={300} src={Noticia} />
        <div className="blog--card--fav--button">
          <MdOutlineFavoriteBorder />
        </div>
      </div>
      <div className="blog--card--layout--container">
        <div className="blog--card--header--container">
          <span>10/03/2024</span>

          <span>Noticia destacada</span>
        </div>
        <div className="blog--card--body--container">
          <strong>Lorem ipsum dolor sit amet consectetur.</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tincidunt urna imperdiet
            tristique auctor auctor enim.
          </p>
        </div>
        <div className="blog--card--footer--container">
          <Link
            href="/blog/un-nuevo-blog"
            type="button"
            className="button--container button--container--secondary"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

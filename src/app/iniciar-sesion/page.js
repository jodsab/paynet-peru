"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import WithNavAndFooter from "@/HOC/withNavAndFooter";
import Image from "next/image";
import sit from "./assets/sit.png";

import "./index.scss";
import Link from "next/link";
import Button from "@/components/Button";

const ICON_SIZE = 20;

export default function IniciarSesion() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <main>
      <WithNavAndFooter>
        <div className="login_container content">
          <div className="loginContainer">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="loginForm">
                  <h2>Iniciar Sesión</h2>
                  <div>
                    <div className="inputGroup">
                      <FaUser size={ICON_SIZE} className="icon" />
                      <Field
                        name="email"
                        type="email"
                        placeholder="Correo electrónico"
                        className={`inputField ${
                          touched.email && errors.email ? "inputError" : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div>
                    <div className="inputGroup">
                      <FaLock size={ICON_SIZE} className="icon" />
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        className={`inputField ${
                          touched.password && errors.password
                            ? "inputError"
                            : ""
                        }`}
                      />
                      <div
                        className="eyeIcon"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaEye size={ICON_SIZE} className="eyeOpen" />
                        ) : (
                          <FaEyeSlash size={ICON_SIZE} />
                        )}
                      </div>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <Link className="recovery" href="/">
                    <p>Olvidé mi contraseña</p>
                  </Link>
                  <button type="submit" className="submitButton">
                    Iniciar sesión
                  </button>
                </Form>
              )}
            </Formik>
            <div className="register_here">
              <Link href="/registrarse">
                <p>¿Aún no tienes una cuenta? Registrate aquí</p>
              </Link>
            </div>
          </div>
          <Image src={sit} height={500} width={"100%"} alt="login_human" />
        </div>
      </WithNavAndFooter>
    </main>
  );
}

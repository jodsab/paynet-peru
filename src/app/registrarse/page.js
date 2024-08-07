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

export default function Registrarse() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
    password2: Yup.string().required("La contraseña debe coincidir"),
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
              initialValues={{ email: "", password: "", password2: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="loginForm">
                  <h2>Crea tu cuenta</h2>
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
                  <div>
                    <div className="inputGroup">
                      <FaLock size={ICON_SIZE} className="icon" />
                      <Field
                        name="password2"
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        className={`inputField ${
                          touched.password2 && errors.password2
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
                      name="password2"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <span className="recomendacion">
                    Debe ser de al menos 8 caracteres y contener una mayúscula,
                    una minúscula y un número.
                  </span>
                  <button type="submit" className="submitButton">
                    Obtener código de verificación
                  </button>
                </Form>
              )}
            </Formik>
            <div className="register_here">
              <Link href="/iniciar-sesion">
                <p>¿Ya tienes una cuenta? Inicia sesión aquí</p>
              </Link>
            </div>
          </div>
          <Image src={sit} height={500} width={"100%"} alt="login_human" />
        </div>
      </WithNavAndFooter>
    </main>
  );
}

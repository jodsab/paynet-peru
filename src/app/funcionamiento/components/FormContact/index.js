import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdEmail, MdOutlineSmartphone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Alert, Spin } from "antd";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Phone from "../../../assets/phone.png";
import { validationSchema } from "./yupSchema";
import { useFormSendMessage } from "@/hooks/Resend/useFormSendMessage.hook";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.scss";

const FormContact = () => {
  const { loading, resendResponse, sendMessage } = useFormSendMessage();
  const [showAlert, setShowAlert] = useState(false);
  const [formActive, setFormActive] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (resendResponse.id) {
      setFormActive(false);
      setShowAlert(true);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [resendResponse.id]);

  return (
    <div data-aos="fade-up" className="function--form--contact--us--container">
      <div className="function--form--contact--us--content--container content">
        <strong className="title">HABLEMOS DEL FUTURO</strong>
        <p className="subtitle">
          PayNet, cree en el poder de conectar. Rellena este formulario y
          conversemos.
        </p>

        <div className="function--form--contact--us">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              sendMessage(values);
            }}
          >
            {({ errors, touched }) => (
              <Form title="Llena el formulario y estaremos contactándonos contigo.">
                <FormikForm>
                  <div>
                    <Input
                      name="name"
                      label="Nombre"
                      type="text"
                      placeholder="Nombre de la persona"
                      icon={<FaUser />}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      label="Correo"
                      type="text"
                      placeholder="correo@ejemplo.com"
                      icon={<MdEmail />}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div>
                    <Input
                      name="phone"
                      type="text"
                      label="Teléfono"
                      placeholder="Teléfono"
                      icon={<MdOutlineSmartphone />}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div>
                    <p>Mensaje</p>
                    <Field as="textarea" name="message" />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error"
                    />
                  </div>

                  <button
                    className="button--container button--container--secondary"
                    type="submit"
                    disabled={!formActive}
                  >
                    {loading ? <Spin /> : "Enviar"}
                  </button>
                  {showAlert && (
                    <div style={{ margintop: "20px" }}>
                      <Alert
                        message="Mensaje enviado"
                        type="success"
                        showIcon
                      />
                    </div>
                  )}
                </FormikForm>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Image
        className="form--hero--image"
        width={700}
        height={700}
        src={Phone}
        alt="phone"
      />
    </div>
  );
};

export default FormContact;

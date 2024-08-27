import * as React from "react";

export const EmailTemplate = ({ name, email, phone, message, fecha }) => (
  <div>
    <h1>Se ha registrado {name}</h1>
    <p>Telefono: {phone}</p>
    <p>Email: {email}</p>
    <p>Mensaje: {message}</p>
    <p>Fecha: {fecha}</p>
  </div>
);

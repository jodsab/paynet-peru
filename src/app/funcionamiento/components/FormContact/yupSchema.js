import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  phone: Yup.string().required("El teléfono es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

export { validationSchema };

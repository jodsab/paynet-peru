import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { formatDate } from "@/shared/functions/dates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const {
    fecha = formatDate(new Date()),
    name = "",
    email = "",
    phone = "",
    message = "",
  } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "PayNet Peru - Admin <admin@paynetperu.com>",
      to: [
        "camilo.b.q@hotmail.com",
        /* email,  */ "alexanderaraujo95@gmail.com",
      ],
      subject: "Gracias por completar el formulario!",
      react: EmailTemplate({ name, email, phone, message, fecha }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

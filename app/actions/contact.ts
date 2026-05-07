"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const situation = formData.get("situation") as string;
  const privacy = formData.get("privacy");

  // Validación
  if (!name || !email || !phone) {
    return {
      success: false,
      message: "Por favor, completa todos los campos obligatorios.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: "El formato del email no es válido.",
    };
  }

  if (!privacy) {
    return {
      success: false,
      message: "Debes aceptar la política de privacidad para continuar.",
    };
  }

  const contactEmail = process.env.CONTACT_EMAIL || "info@afectadosobadal.com";

  try {
    // Email interno al equipo
    await resend.emails.send({
      from: "Afectados Obadal <noreply@afectadosobadal.com>",
      to: [contactEmail],
      subject: `🔔 Nuevo lead: ${name} — Sentencia Obadal`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc;">
          <div style="background: #0A1628; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 20px;">Nuevo Lead — Afectados Obadal</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 140px;">Nombre</td>
                <td style="padding: 10px 0; color: #0f172a;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email</td>
                <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #475569;">Teléfono</td>
                <td style="padding: 10px 0; color: #0f172a;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              ${
                situation
                  ? `<tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; font-weight: bold; color: #475569; vertical-align: top;">Situación</td>
                <td style="padding: 10px 0; color: #0f172a;">${situation}</td>
              </tr>`
                  : ""
              }
            </table>
            <div style="margin-top: 20px; padding: 12px 16px; background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #15803d;">Lead recibido el ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Email de confirmación al interesado
    await resend.emails.send({
      from: "Afectados Obadal <noreply@afectadosobadal.com>",
      to: [email],
      subject: "Hemos recibido tu solicitud — Sentencia Obadal",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc;">
          <div style="background: #0A1628; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 20px; color: #C9A84C;">AfectadosObadal.com</h1>
            <p style="margin: 8px 0 0; font-size: 14px; color: #94a3b8;">Reclamaciones por abuso de temporalidad</p>
          </div>
          <div style="background: white; padding: 32px 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <p style="color: #0f172a; font-size: 16px;">Hola <strong>${name}</strong>,</p>
            <p style="color: #475569; line-height: 1.6;">Hemos recibido correctamente tu solicitud de consulta. Nuestros especialistas en Empleo Público analizarán tu caso y se pondrán en contacto contigo en las próximas <strong>24-48 horas hábiles</strong>.</p>
            <div style="margin: 24px 0; padding: 20px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px; font-size: 13px; font-weight: bold; color: #0A1628; text-transform: uppercase; letter-spacing: 0.05em;">Qué ocurrirá ahora</p>
              <ul style="margin: 0; padding: 0 0 0 20px; color: #475569; font-size: 14px; line-height: 2;">
                <li>Revisión de tu situación por nuestro equipo</li>
                <li>Contacto personalizado por email o teléfono</li>
                <li>Evaluación gratuita de tu caso</li>
              </ul>
            </div>
            <p style="color: #475569; font-size: 14px; line-height: 1.6;">Si tienes urgencia, puedes responder a este email directamente.</p>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 16px;">
              Has recibido este email porque solicitaste información en afectadosobadal.com. 
              Tus datos son tratados conforme al RGPD.
            </p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message:
        "¡Solicitud enviada! Nos pondremos en contacto contigo en 24-48 horas.",
    };
  } catch (error) {
    console.error("Error enviando email:", error);
    return {
      success: false,
      message:
        "Ha ocurrido un error. Por favor, inténtalo de nuevo o contáctanos directamente.",
    };
  }
}

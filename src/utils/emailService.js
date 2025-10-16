import emailjs from "emailjs-com";

export async function sendContactEmail({ name, email, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn("EmailJS not configured - simulate send");
    return { ok: true, message: "Simulated send (EmailJS keys missing)" };
  }

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      { from_name: name, from_email: email, message },
      publicKey
    );
    return { ok: true, result };
  } catch (err) {
    console.error(err);
    return { ok: false, error: err };
  }
}

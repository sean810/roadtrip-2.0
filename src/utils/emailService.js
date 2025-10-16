// Updated to use @emailjs/browser instead of deprecated emailjs-com
import emailjs from "@emailjs/browser";

// Initialize EmailJS (call this once on app startup)
export function initEmailJS() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
}

export async function sendContactEmail({ name, email, phone, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!serviceId || !templateId) {
    console.warn("EmailJS not configured - simulating send");
    return { ok: true, message: "Simulated send (EmailJS keys missing)" };
  }

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: name,
        from_email: email,
        from_phone: phone || "N/A",
        message,
        to_email: "roadtriptravel.courier@gmail.com"
      }
    );
    return { ok: true, result };
  } catch (err) {
    console.error("EmailJS error:", err);
    return { ok: false, error: err };
  }
}

export async function sendBookingConfirmation(bookingData) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE;

  if (!serviceId || !templateId) {
    return { ok: true };
  }

  try {
    await emailjs.send(serviceId, templateId, bookingData);
    return { ok: true };
  } catch (err) {
    console.error("Booking email error:", err);
    return { ok: false, error: err };
  }
}
import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact({ showToast }) {
  return (
    <section className="section container" data-aos="fade-up">
      <h2>Get in Touch</h2>

      <div className="contact-grid" style={{ marginTop: "var(--sp-xl)" }}>
        <div className="contact-card">
          <h3>Contact Information</h3>
          <p className="muted">Reach out to us anytime. We're here to help.</p>

          <div style={{ marginTop: "var(--sp-lg)" }}>
            <h4>📧 Email</h4>
            <a href="mailto:roadtriptravel.courier@gmail.com">roadtriptravel.courier@gmail.com</a>
          </div>

          <div style={{ marginTop: "var(--sp-lg)" }}>
            <h4>📞 Phone</h4>
            <div>Landline: +254 205 232 940</div>
            <div>Mobile: +254 711 273 884</div>
            <div>Mobile: +254 724 273 784</div>
          </div>

          <div style={{ marginTop: "var(--sp-xl)" }}>
            <a className="btn" href="https://wa.me/254711273884" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn secondary" href="tel:+254711273884" style={{ marginLeft: "var(--sp-md)" }}>Call Now</a>
          </div>

          <div style={{ marginTop: "var(--sp-xl)" }}>
            <ContactForm showToast={showToast} />
          </div>
        </div>

        <div className="contact-card">
          <h3>Office Location</h3>
          <p className="muted">Visit us in Nairobi</p>
          <iframe
            title="RoadTrip Location"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818150!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzEwLjAiUyAzNsKwNDknNTYuNiJF!5e0!3m2!1sen!2ske!4v1234567890">
          </iframe>
        </div>
      </div>
    </section>
  );
}
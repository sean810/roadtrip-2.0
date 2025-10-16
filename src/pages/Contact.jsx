import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact(){
  return (
    <section className="section container" data-aos="fade-up">
      <h2>Contact Us</h2>

      <div className="contact-grid" style={{marginTop:12}}>
        <div className="contact-card">
          <h3>Get in touch</h3>
          <p className="muted">For a pleasant road trip:</p>
          <p><strong>Email:</strong> <a href="mailto:roadtriptravel.courier@gmail.com">roadtriptravel.courier@gmail.com</a></p>
          <p><strong>Landline:</strong> +254 205 232 940</p>
          <p><strong>Cell:</strong></p>
          <ul className="muted">
            <li>+254 711 273 884</li>
            <li>+254 724 273 784</li>
            <li>+254 724 740 768</li>
          </ul>

          <div style={{marginTop:12}}>
            <a className="btn ghost" href="https://wa.me/254711273884" target="_blank" rel="noreferrer">WhatsApp Us</a>
            <a className="btn" style={{marginLeft:8}} href="tel:+254711273884">Call</a>
          </div>

          <div style={{marginTop:16}}>
            <ContactForm />
          </div>
        </div>

        <div className="contact-card">
          <h3>Find us</h3>
          <p className="muted">Moi Avenue (example)</p>
          <div className="map" style={{marginTop:8,borderRadius:8,overflow:"hidden"}}>
            <iframe title="RoadTrip location" width="100%" height="300" style={{border:0}} loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.000000000!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzEwLjAiUyAzNsKwNDknNTYuNiJF!5e0!3m2!1sen!2ske!4v0000"></iframe>
          </div>

          <div style={{marginTop:12}}>
            <img src="/images/contact-road.jpg" alt="On the road" style={{width:"100%",borderRadius:8}} />
          </div>
        </div>
      </div>
    </section>
  );
}

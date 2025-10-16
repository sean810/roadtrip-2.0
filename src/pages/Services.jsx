import React from "react";

const services = [
  { title: "Cab Services", desc: "Chauffeur-driven services to any part of the country. Professional drivers, comfortable rides." },
  { title: "Car Hire (Self-Drive)", desc: "Clean, well-maintained vehicles for rent. Perfect for personal or business use." },
  { title: "Lease Hire", desc: "Long-term lease solutions for vehicles (1+ years). Flexible terms and competitive rates." },
  { title: "Transfer Services", desc: "Airport, hotel, and tourist site transfers. Reliable and on-time service guaranteed." },
  { title: "Courier Delivery", desc: "Fast and secure parcel delivery via motorcycle and vehicles. Track your shipment in real-time." },
  { title: "Group Transport", desc: "Charter buses for groups, events, and tours. Comfortable seating and professional service." }
];

export default function Services() {
  return (
    <section className="section container" data-aos="fade-up">
      <h2>Our Services</h2>
      <p className="muted" style={{ textAlign: "center", marginBottom: "var(--sp-xl)" }}>
        Comprehensive travel and logistics solutions tailored to your needs
      </p>
      <div className="services-grid">
        {services.map((s, idx) => (
          <article key={idx} className="card">
            <div className="service-title">{s.title}</div>
            <p className="muted">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
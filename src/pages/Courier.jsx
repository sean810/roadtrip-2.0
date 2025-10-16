import React from "react";

export default function Courier() {
  return (
    <section className="section container" data-aos="fade-up">
      <h2>Courier Delivery Services</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "var(--sp-xl)", alignItems: "center", marginTop: "var(--sp-xl)" }}>
        <div>
          <p>
            We provide fast, reliable courier delivery services for parcels, documents, and packages. Our network of trained couriers ensures your items arrive safely and on time, every time.
          </p>

          <h3 style={{ marginTop: "var(--sp-lg)" }}>Why Choose Our Courier Service?</h3>
          <ul style={{ marginTop: "var(--sp-md)", paddingLeft: "var(--sp-lg)" }}>
            <li>Same-day delivery available in Nairobi</li>
            <li>Trained and professional couriers</li>
            <li>Real-time tracking of shipments</li>
            <li>Competitive rates for bulk deliveries</li>
            <li>Fully insured packages</li>
            <li>Available 24/7 for emergency deliveries</li>
          </ul>

          <p style={{ marginTop: "var(--sp-lg)", color: "var(--muted)" }}>
            For courier bookings, call or WhatsApp us with pickup location, delivery address, and parcel details.
          </p>
        </div>

        <div className="frame">
          <img src="/images/motorbike-courier.jpg" alt="Courier Motorcycle" />
        </div>
      </div>
    </section>
  );
}

import React from "react";

const clients = [
  "client-citizen.png", "client-excelsior.png", "client-avu.png", "client-peacenet.png",
  "client-quasima.png", "client-amicus.png", "client-vkibera.png", "client-alfajiri.png",
  "client-azali.png", "client-usalama.png", "client-kivo.png"
];

export default function Clients() {
  return (
    <section className="section container" data-aos="fade-up">
      <h2>Our Trusted Clients</h2>
      <p className="muted" style={{ textAlign: "center" }}>Serving organizations across multiple sectors with professionalism and reliability</p>

      <div className="clients-grid" style={{ marginTop: "var(--sp-xl)" }}>
        {clients.map((c, i) => (
          <div className="client-card" key={i}>
            <img src={`/images/${c}`} alt={`Client ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "var(--sp-xl)", padding: "var(--sp-xl)", background: "rgba(255,107,0,.05)", borderRadius: "var(--radius)", textAlign: "center" }}>
        <h3>Join Our Growing Network</h3>
        <p className="muted">Become a trusted partner of RoadTrip for your transport needs</p>
        <a href="mailto:roadtriptravel.courier@gmail.com" className="btn" style={{ marginTop: "var(--sp-md)" }}>
          Get in Touch
        </a>
      </div>
    </section>
  );
}

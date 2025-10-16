import React from "react";
import { Link } from "react-router-dom";
import fleet from "../api/fleetData";
import testimonials from "../api/testimonials";
import FleetCard from "../components/FleetCard";
import ReviewCard from "../components/ReviewCard";
import { useParallax } from "../hooks/useParallax";

export default function Home({ showToast }) {
  useParallax(".parallax .bg1", 0.06);
  useParallax(".parallax .bg2", 0.12);
  useParallax(".parallax .fg", 0.02);

  const preview = fleet.slice(0, 3);

  const onBook = (item) => {
    showToast(`${item.name} added to booking. Redirecting...`, "info");
    setTimeout(() => window.location.href = "/booking", 1000);
  };

  return (
    <>
      <section className="hero">
        <div className="parallax" aria-hidden="true">
          <div className="layer bg1"></div>
          <div className="layer bg2"></div>
          <div className="layer fg"></div>
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content container" data-aos="fade-up">
          <p className="eyebrow">RoadTrip Travel & Courier Services Ltd</p>
          <h1>Drive. Deliver. Discover.</h1>
          <p className="lead">Professional vehicle hire, airport transfers and courier services — reliable and timely.</p>

          <div className="cta">
            <Link className="btn" to="/booking">Book a Vehicle</Link>
            <Link className="btn ghost" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section container" data-aos="fade-up">
        <h2>Popular Vehicles</h2>
        <div className="fleet-grid">
          {preview.map(item => <FleetCard key={item.id} item={item} onBook={onBook} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--sp-lg)" }}>
          <Link className="btn secondary" to="/fleet">View Full Fleet</Link>
        </div>
      </section>

      <section className="section container" data-aos="fade-up">
        <h2>Why Choose RoadTrip?</h2>
        <div className="services-grid">
          <article className="card">
            <div className="service-title">✓ Professional Drivers</div>
            <p className="muted">Fully qualified and experienced drivers dedicated to your safety.</p>
          </article>
          <article className="card">
            <div className="service-title">✓ Well-Maintained Fleet</div>
            <p className="muted">Modern, clean, and regularly serviced vehicles for your comfort.</p>
          </article>
          <article className="card">
            <div className="service-title">✓ Competitive Pricing</div>
            <p className="muted">Transparent rates with no hidden charges. Value for money.</p>
          </article>
          <article className="card">
            <div className="service-title">✓ Timely Service</div>
            <p className="muted">Always on time. Your schedule is our priority.</p>
          </article>
        </div>
      </section>

      <section className="section container" data-aos="fade-up">
        <h2>Customer Reviews</h2>
        <p className="muted" style={{ textAlign: "center" }}>Trusted by 1000+ satisfied customers</p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--sp-lg)", marginBottom: "var(--sp-xl)" }}>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--orange)" }}>4.6 ★</div>
          <div className="muted">Based on 342 verified Google reviews</div>
        </div>

        <div className="testimonials">
          {testimonials.map(t => <ReviewCard key={t.id} {...t} />)}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--sp-xl)" }}>
          <a className="btn secondary" href="https://www.google.com/maps" target="_blank" rel="noreferrer">Read All Reviews</a>
        </div>
      </section>
    </>
  );
}
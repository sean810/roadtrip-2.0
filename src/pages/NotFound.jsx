import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section container" style={{ textAlign: "center" }}>
      <div style={{ fontSize: "4rem", fontWeight: 900, color: "var(--orange)", marginBottom: "var(--sp-md)" }}>404</div>
      <h2>Page Not Found</h2>
      <p className="muted">The page you're looking for doesn't exist or has been moved.</p>
      <Link className="btn" to="/" style={{ marginTop: "var(--sp-lg)" }}>Return Home</Link>
    </section>
  );
}
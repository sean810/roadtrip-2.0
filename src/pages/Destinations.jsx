import React from "react";
import { useWeather } from "../hooks/useWeather";

const defaultCities = [
  { name: "Nairobi", lat: -1.286389, lon: 36.817223 },
  { name: "Mombasa", lat: -4.043477, lon: 39.668206 },
  { name: "Kisumu", lat: -0.091702, lon: 34.7680 }
];

export default function Destinations() {
  const { weather, loading, error } = useWeather(defaultCities);

  return (
    <section className="section container" data-aos="fade-up">
      <h2>Destinations & Weather</h2>
      <p className="muted" style={{ textAlign: "center" }}>Real-time weather updates for popular destinations</p>

      {error && <div className="form-error" style={{ textAlign: "center", marginTop: "var(--sp-lg)" }}>Unable to load weather data</div>}

      <div className="services-grid" style={{ marginTop: "var(--sp-xl)" }}>
        {loading ? (
          <div style={{ textAlign: "center", gridColumn: "1/-1", padding: "var(--sp-xl)" }}>
            <div className="spinner"></div>
            <p className="muted" style={{ marginTop: "var(--sp-md)" }}>Loading weather...</p>
          </div>
        ) : Object.keys(weather).length === 0 ? (
          <div className="empty-state">No weather data available</div>
        ) : (
          Object.entries(weather).map(([city, data]) => (
            <article key={city} className="card">
              <h3 style={{ marginBottom: "var(--sp-md)" }}>{city}</h3>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--orange)", marginBottom: "var(--sp-md)" }}>
                {data.temp}°C
              </div>
              <p className="muted" style={{ marginBottom: "var(--sp-md)", textTransform: "capitalize" }}>
                {data.desc}
              </p>
              <a className="btn secondary" href={`https://www.google.com/search?q=things+to+do+in+${city}`} target="_blank" rel="noreferrer">
                Travel Tips
              </a>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
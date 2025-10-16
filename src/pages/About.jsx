import React from "react";

export default function About() {
  const values = ["Accountability", "Responsibility", "Professionalism", "Teamwork", "Integrity", "Dedication"];

  return (
    <section className="section container" data-aos="fade-up">
      <h2>About RoadTrip</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "var(--sp-xl)", alignItems: "center", marginTop: "var(--sp-xl)" }}>
        <div>
          <p>
            We are a leading corporate travel company offering quality and professional transport services. With over a decade of experience, we've built our reputation on reliability, professionalism, and customer satisfaction.
          </p>

          <div style={{ marginTop: "var(--sp-xl)" }}>
            <h3>Our Mission</h3>
            <p>To deliver exceptional travel experiences and logistics solutions that exceed customer expectations, ensuring satisfaction through professional service and reliable performance.</p>

            <h3 style={{ marginTop: "var(--sp-xl)" }}>Our Vision</h3>
            <p>To be the most preferred travel and courier company in East Africa, known for reliability, innovation, and uncompromising service quality.</p>
          </div>

          <h3 style={{ marginTop: "var(--sp-xl)" }}>Core Values</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--sp-md)", marginTop: "var(--sp-md)" }}>
            {values.map((v, i) => (
              <div key={i} className="filter-chip">
                {v}
              </div>
            ))}
          </div>
        </div>

        <div className="frame">
          <img src="/images/hero-road-1.jpg" alt="RoadTrip Team" />
        </div>
      </div>
    </section>
  );
}

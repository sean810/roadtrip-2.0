import React from "react";

const services = [
  {title:"Cab Services", desc: "Chauffeur-driven services to any part of the country."},
  {title:"Car Hire (Self-Drive)", desc:"Clean, well-maintained vehicles for rent. We also specialise in project hire."},
  {title:"Lease Hire", desc:"We lease vehicles for long periods (more than a year)."},
  {title:"Transfer Services", desc:"Airport transfers, hotel transfers, tourist site transfers and more."}
];

export default function Services(){
  return (
    <section className="section container" data-aos="fade-up">
      <h2>Our Services</h2>
      <div className="services-grid" style={{marginTop:12}}>
        {services.map((s,idx)=>(
          <article className="service-card" key={idx}>
            <div className="service-title">{s.title}</div>
            <p className="muted">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

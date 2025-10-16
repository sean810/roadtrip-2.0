import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import fleet from "../api/fleetData";
import testimonials from "../api/testimonials";
import FleetCard from "../components/FleetCard";
import ReviewCard from "../components/ReviewCard";

export default function Home(){
  useEffect(()=>{
    // dramatic parallax scroll: move layers on scroll
    const onScroll = () => {
      const y = window.scrollY;
      const bg1 = document.querySelector(".parallax .bg1");
      const bg2 = document.querySelector(".parallax .bg2");
      const fg = document.querySelector(".parallax .fg");
      if(bg1) bg1.style.transform = `translateY(${y * 0.06}px) translateX(-50%)`;
      if(bg2) bg2.style.transform = `translateY(${y * 0.12}px) translateX(-50%)`;
      if(fg) fg.style.transform = `translateY(${y * 0.02}px) translateX(-50%)`;
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const preview = fleet.slice(0,3);
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
            <Link className="btn" to="/fleet">Book a Vehicle</Link>
            <Link className="btn ghost" to="/contact" style={{marginLeft:8}}>Contact / Book</Link>
          </div>
        </div>
      </section>

      <section className="section container" data-aos="fade-up">
        <h2>Popular options</h2>
        <div className="services-grid">
          {preview.map(item => <FleetCard key={item.id} item={item} onBook={() => alert("Open contact to book")} />)}
        </div>
        <div style={{textAlign:"center",marginTop:12}}>
          <Link className="btn ghost" to="/fleet">View Full Fleet</Link>
        </div>
      </section>

      <section className="section container" data-aos="fade-up">
        <h2>Google rating</h2>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:18}}>
          <div style={{fontSize:28,fontWeight:800,color:"var(--orange)"}}>4.6 ★</div>
          <div style={{color:"var(--muted)"}}>Based on 342 reviews</div>
        </div>

        <div style={{marginTop:16}} className="testimonials">
          {testimonials.map(t => <ReviewCard key={t.id} {...t} />)}
        </div>

        <div style={{textAlign:"center", marginTop:12}}>
          <a className="btn ghost" href="https://www.google.com/maps" target="_blank" rel="noreferrer">See more reviews on Google</a>
        </div>
      </section>
    </>
  );
}

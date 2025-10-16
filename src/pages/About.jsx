import React from "react";

export default function About(){
  const values = ["Accountability","Responsibility","Professionalism","Teamwork","Integrity","Dedication"];
  return (
    <section className="section container" data-aos="fade-up">
      <h2>About Us</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 420px",gap:20,alignItems:"center"}}>
        <div>
          <p>We are a corporate travel company offering quality and professional transport services: long term hire, short term hire, chauffeur driven hire, and courier services. Our vehicles are clean and well maintained and all our drivers are fully qualified.</p>

          <div style={{marginTop:16}}>
            <h3>Mission</h3>
            <p>Our mission is to see all our clients happy and satisfied with the excellent services they experience from us and in return getting many referral clients.</p>
            <h3>Vision</h3>
            <p>We aspire to be the most preferred travel company providing reliable, professional and efficient services to all our clients.</p>
          </div>

          <h3 style={{marginTop:12}}>Core Values</h3>
          <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:8}}>
            {values.map((v,i)=>(
              <div key={i} style={{background:"#fff",padding:"8px 10px",borderRadius:8,boxShadow:"0 8px 22px rgba(0,30,60,.04)",fontWeight:700}}>{v}</div>
            ))}
          </div>
        </div>

        <div style={{borderRadius:12,overflow:"hidden",height:320}}>
          <img src="/images/hero-road-1.jpg" alt="Road view" style={{width:"100%",height:"100%",objectFit:"cover"}} />
        </div>
      </div>
    </section>
  );
}

import React from "react";

const clients = [
  "client-citizen.png","client-excelsior.png","client-avu.png","client-peacenet.png",
  "client-quasima.png","client-amicus.png","client-vkibera.png","client-alfajiri.png",
  "client-azali.png","client-usalama.png","client-kivo.png"
];

export default function Clients(){
  return (
    <section className="section container" data-aos="fade-up">
      <h2>Our Clients</h2>
      <p style={{textAlign:"center",marginTop:6}} className="muted">Trusted by organizations across sectors</p>

      <div style={{marginTop:16}} className="clients-grid">
        {clients.map((c,i)=>(
          <div className="client-card" key={i}>
            <img src={`/images/${c}`} alt={c} style={{maxWidth:"120px",maxHeight:"60px",objectFit:"contain"}}/>
          </div>
        ))}
      </div>
    </section>
  );
}

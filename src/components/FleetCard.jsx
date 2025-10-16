import React from "react";

export default function FleetCard({ item, onBook }) {
  return (
    <article className="service-card" style={{display:"flex",gap:12,alignItems:"center"}}>
      <div style={{width:140,height:90,flexShrink:0,borderRadius:10,overflow:"hidden"}}>
        <img src={item.img} alt={item.name} style={{width:"100%",height:"100%",objectFit:"cover"}} />
      </div>
      <div style={{flex:1}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h4 style={{margin:0}}>{item.name}</h4>
          <div style={{fontWeight:900,color:"var(--orange)"}}>{item.pricePerDay ? `KSh ${item.pricePerDay}` : item.pricePerTrip ? `KSh ${item.pricePerTrip}` : "-"}</div>
        </div>
        <div style={{fontSize:13,color:"var(--muted)",marginTop:6}}>{item.type} • {item.seats} seats</div>
        <div style={{marginTop:8,display:"flex",gap:8}}>
          <button className="small-btn" onClick={() => onBook(item)}>Book</button>
          <button className="small-btn" onClick={() => alert("Contact us to view details")}>Details</button>
        </div>
      </div>
    </article>
  );
}

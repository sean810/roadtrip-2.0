import React from "react";

export default function Courier(){
  return (
    <section className="section container" data-aos="fade-up">
      <h2>Courier Delivery</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 420px",gap:20,alignItems:"center"}}>
        <div>
          <p>We provide timely deliveries of parcels, documents and all other tailor-made deliveries using motorcycle couriers and vehicles. Our couriers are trained for quick and safe handling of packages.</p>
          <p style={{marginTop:10}}>For urgent courier bookings, call or WhatsApp us and include pickup location, delivery address and parcel size.</p>
        </div>
        <div>
          <div className="frame">
            <img src="/images/motorbike-courier.jpg" alt="motorbike courier" />
          </div>
        </div>
      </div>
    </section>
  );
}

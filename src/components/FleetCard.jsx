import React from "react";

export default function FleetCard({ item, onBook }) {
  return (
    <article className="service-card">
      <div className="fleet-card-inner">
        <div className="fleet-card-img">
          <img src={item.img} alt={item.name} loading="lazy" />
        </div>
        <div className="fleet-card-content">
          <div className="fleet-card-header">
            <h4 style={{ margin: 0 }}>{item.name}</h4>
            <div className="fleet-card-price">
              {item.pricePerDay ? `KSh ${item.pricePerDay.toLocaleString()}` : item.pricePerTrip ? `KSh ${item.pricePerTrip}` : "—"}
            </div>
          </div>
          <div className="fleet-card-meta">{item.type} • {item.seats} seats</div>
          <div className="fleet-card-actions">
            <button className="small-btn" onClick={() => onBook(item)}>Book Now</button>
            <button className="small-btn" onClick={() => onBook(item)}>Details</button>
          </div>
        </div>
      </div>
    </article>
  );
}

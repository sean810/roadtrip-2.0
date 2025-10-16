import React, { useMemo, useState } from "react";
import fleetData from "../api/fleetData";
import FleetCard from "../components/FleetCard";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Fleet({ showToast }) {
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");
  const [bookings, setBookings] = useLocalStorage("bookings", []);

  const types = useMemo(() => {
    const s = new Set(fleetData.map(f => f.type));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = fleetData.filter(item => {
    const matchesFilter = filter === "all" || item.type === filter;
    const matchesQ = q.trim() === "" || item.name.toLowerCase().includes(q.toLowerCase());
    return matchesFilter && matchesQ;
  });

  function onBook(item) {
    const newBooking = { ...item, bookingId: Date.now() };
    setBookings([...bookings, newBooking]);
    showToast(`✓ ${item.name} added to cart`, "success");
  }

  return (
    <section className="section container" data-aos="fade-up">
      <h2>Our Fleet</h2>
      
      <div className="filter-controls">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All types</option>
          {types.slice(1).map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <input
          placeholder="Search model..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{ marginLeft: "auto" }}
        />

        {bookings.length > 0 && (
          <div className="filter-chip">
            <span>🛒 {bookings.length} items</span>
            <button onClick={() => window.location.href = "/booking"}>View Cart</button>
          </div>
        )}
      </div>

      <div className="fleet-grid">
        {filtered.length > 0 ? (
          filtered.map(f => <FleetCard key={f.id} item={f} onBook={onBook} />)
        ) : (
          <div className="empty-state">
            <h3>No vehicles found</h3>
            <p className="muted">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </section>
  );
}

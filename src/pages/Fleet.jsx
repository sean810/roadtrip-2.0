import React, { useMemo, useState } from "react";
import fleetData from "../api/fleetData";
import FleetCard from "../components/FleetCard";

export default function Fleet(){
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");

  const types = useMemo(() => {
    const s = new Set(fleetData.map(f => f.type));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = fleetData.filter(item => {
    const matchesFilter = filter === "all" || item.type === filter;
    const matchesQ = q.trim() === "" || item.name.toLowerCase().includes(q.toLowerCase());
    return matchesFilter && matchesQ;
  });

  function onBook(item){
    alert(`To book ${item.name}, please contact us via the Contact page or WhatsApp.`);
    window.location.href = "/contact";
  }

  return (
    <section className="section container" data-aos="fade-up">
      <h2>Our Fleet</h2>
      <div style={{display:"flex",gap:12,marginTop:12,flexWrap:"wrap",alignItems:"center"}}>
        <select onChange={(e)=>setFilter(e.target.value)} value={filter}>
          <option value="all">All types</option>
          {types.slice(1).map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <input placeholder="Search model..." value={q} onChange={(e)=>setQ(e.target.value)} style={{marginLeft:"auto",padding:"8px",borderRadius:8,border:"1px solid #e6eef8"}} />
      </div>

      <div style={{marginTop:16,display:"grid",gap:12,gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))"}}>
        {filtered.map(f => <FleetCard key={f.id} item={f} onBook={onBook} />)}
      </div>
    </section>
  );
}

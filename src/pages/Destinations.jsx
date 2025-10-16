import React, { useEffect, useState } from "react";
import axios from "axios";

const defaultCities = [
  { name: "Nairobi", lat: -1.286389, lon: 36.817223 },
  { name: "Mombasa", lat: -4.043477, lon: 39.668206 },
  { name: "Kisumu", lat: -0.091702, lon: 34.7680 }
];

export default function Destinations(){
  const [weather, setWeather] = useState({});
  const key = import.meta.env.VITE_OPENWEATHER_KEY;

  useEffect(()=>{
    async function fetchAll(){
      if(!key){
        console.warn("OpenWeather key missing — showing placeholder data");
        setWeather({
          Nairobi: { temp: 24, desc: "Partly cloudy" },
          Mombasa: { temp: 29, desc: "Sunny" },
          Kisumu: { temp: 23, desc: "Showers" }
        });
        return;
      }
      try {
        const results = {};
        for(const c of defaultCities){
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${c.lat}&lon=${c.lon}&units=metric&appid=${key}`);
          results[c.name] = {
            temp: Math.round(res.data.main.temp),
            desc: res.data.weather[0].description
          };
        }
        setWeather(results);
      } catch(e){
        console.error(e);
      }
    }
    fetchAll();
  }, [key]);

  return (
    <section className="section container" data-aos="fade-up">
      <h2>Destinations & Weather</h2>
      <p className="muted">Quick weather snapshot for popular destinations.</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:12,marginTop:12}}>
        {Object.keys(weather).length === 0 ? (
          <div className="service-card">Loading...</div>
        ) : (
          Object.entries(weather).map(([city,data])=>(
            <div key={city} className="service-card">
              <h3 style={{margin:0}}>{city}</h3>
              <div style={{marginTop:8,fontWeight:800,color:"var(--orange)"}}>{data.temp}°C</div>
              <div className="muted" style={{marginTop:6}}>{data.desc}</div>
              <div style={{marginTop:10}}><a className="small-btn" href={`https://www.google.com/search?q=things+to+do+in+${city}`} target="_blank" rel="noreferrer">Travel tips</a></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

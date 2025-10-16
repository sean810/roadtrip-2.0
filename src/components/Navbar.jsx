import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="navbar" style={{boxShadow: scrolled ? "0 6px 24px rgba(2,16,40,.06)" : "none"}}>
      <div className="container nav-inner">
        <Link to="/" className="logo"><span className="rhat">R</span>oadTrip</Link>

        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/fleet">Fleet</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/courier">Courier</NavLink></li>
          <li><NavLink to="/clients">Clients</NavLink></li>
          <li><NavLink to="/destinations">Destinations</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div className="cta">
          <Link className="btn" to="/contact">Book / Contact</Link>
        </div>
      </div>
    </nav>
  );
}

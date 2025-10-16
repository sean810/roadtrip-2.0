
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? "0 6px 24px rgba(2,16,40,.06)" : "none" }}>
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="rhat">R</span>oadTrip
        </Link>

        <ul className="nav-links" style={menuOpen ? { display: "flex", flexDirection: "column", position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", padding: "1rem", boxShadow: "0 8px 16px rgba(0,0,0,.1)", zIndex: 100 } : {}}>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/fleet" onClick={closeMenu}>Fleet</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/courier" onClick={closeMenu}>Courier</NavLink></li>
          <li><NavLink to="/clients" onClick={closeMenu}>Clients</NavLink></li>
          <li><NavLink to="/destinations" onClick={closeMenu}>Destinations</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        <div className="cta">
          <Link className="btn" to="/booking">Quick Book</Link>
        </div>

        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
          ☰
        </button>
      </div>
    </nav>
  );
}
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <section className="section container" style={{textAlign:"center"}}>
      <h2>Page not found</h2>
      <p className="muted">It looks like the page you're looking for doesn't exist.</p>
      <Link className="btn" to="/">Return Home</Link>
    </section>
  );
}

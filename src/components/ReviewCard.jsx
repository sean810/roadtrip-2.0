import React from "react";

export default function ReviewCard({ avatar, text, name, rating }) {
  return (
    <figure className="testimonial" style={{padding:16}}>
      {avatar && <img className="avatar" src={avatar} alt={name} />}
      <blockquote style={{marginTop:8}}>{text}</blockquote>
      <figcaption style={{marginTop:8,fontWeight:700}}>— {name} • {"★".repeat(rating)}</figcaption>
    </figure>
  );
}

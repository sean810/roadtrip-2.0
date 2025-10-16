import React from "react";

export default function ReviewCard({ avatar, text, name, rating }) {
  return (
    <figure className="testimonial">
      {avatar && <img className="avatar" src={avatar} alt={name} loading="lazy" />}
      <blockquote>{text}</blockquote>
      <figcaption>— {name} • <span className="rating">{"★".repeat(rating)}</span></figcaption>
    </figure>
  );
}
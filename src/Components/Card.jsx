// src/Card.js
import React from 'react';
import '../index.css';

function Card({ image, title, price, weight, origin }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-price">${price}</p>
        <p className="card-weight">Weight: {weight}</p>
        <p className="card-origin">Origin: {origin}</p>
      </div>
    </div>
  );
}

export default Card;

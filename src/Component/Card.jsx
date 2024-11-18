import React from 'react';
import './Secard.css';  // Importing card-specific CSS

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
}

export default Card;

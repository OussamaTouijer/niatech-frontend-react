import React, { useState } from 'react';
import './RepeatedCards.css';

const RepeatedCards = ({ title, description, image, features, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`repeated-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-badge">{category}</div>
      
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="card-image-overlay"></div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        {features && (
          <div className="card-features">
            <h4 className="features-title">Ce service inclut :</h4>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <button className="card-button">
          En savoir plus
          <svg className="button-arrow" viewBox="0 0 24 24" width="14" height="14">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RepeatedCards;
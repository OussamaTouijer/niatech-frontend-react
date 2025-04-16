// Banner.js
import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ 
  title, 
  subtitle, 
  imageUrl, 
  overlayOpacity = 0.3, 
  ctaText, 
  ctaAction, 
  height = '70vh',
  textAlign = 'center',
  children  // Ajout de la prop children
}) => {
  return (
    <section 
      className="banner" 
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        minHeight: height
      }}
      aria-label="Bannière principale"
    >
      <div 
        className="overlay" 
        style={{ opacity: overlayOpacity }}
      ></div>
      
      <div className="content" style={{ textAlign }}>
        {/* <h1 className="title animate-slide-up">{title}</h1> */}
        
        {/* {subtitle && (
          <p className="subtitle animate-slide-up delay-1">{subtitle}</p>
        )} */}
        
        {/* {ctaText && (
          <button 
            className="cta-btn animate-fade-in delay-2"
            onClick={ctaAction}
            aria-label="Appel à l'action"
          >
            {ctaText}
          </button>
        )} */}
        
        {/* Affichage des enfants passés dans le composant */}
        <div className="content" style={{ textAlign: 'left' }}>
    <h1 className="title animate-slide-up">NiaTech</h1>
    
    <p className="main-description animate-slide-up delay-1">
      Plateforme dédiée à la transformation digitale des entreprises, offrant des solutions technologiques sur mesure
    </p>

    <ul className="solutions-list animate-fade-in delay-2">
      <li className="solution-item">
        <i className="fas fa-check-circle"></i>
        Développement d'applications web et mobiles
      </li>
      <li className="solution-item">
        <i className="fas fa-check-circle"></i>
        Intégration de systèmes intelligents
      </li>
      <li className="solution-item">
        <i className="fas fa-check-circle"></i>
        Automatisation des processus métiers
      </li>
      <li className="solution-item">
        <i className="fas fa-check-circle"></i>
        Transformation digitale sur mesure
      </li>
    </ul>

    <div className="expert-section animate-fade-in delay-3">
      <h3>Une équipe d'experts passionnés</h3>
      <p>
        Accompagnement personnalisé pour optimiser votre performance et accélérer 
        votre transition numérique
      </p>
    </div>
  </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  overlayOpacity: PropTypes.number,
  ctaText: PropTypes.string,
  ctaAction: PropTypes.func,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node  // Déclaration des enfants attendus
};

export default Banner;

import React, { useState, useEffect, useRef } from 'react';
import './Banner.css'; // Importez le fichier CSS créé précédemment

const Banner = () => {
  // États pour gérer les animations et le carrousel
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const lightPointsRef = useRef(null);
  
  // Liste des solutions offertes par NiaTech
  const solutions = [
    "Développement d'applications web et mobiles",
    "Intégration de systèmes intelligents",
    "Automatisation des processus métiers",
    "Transformation digitale sur mesure"
  ];
  
  // Effet pour l'animation d'entrée et la génération des points lumineux
  useEffect(() => {
    // Animation d'entrée différée pour un meilleur effet visuel
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Génération des points lumineux
    if (lightPointsRef.current) {
      generateLightPoints();
    }
    
    // Nettoyage du timer à la démontage
    return () => clearTimeout(visibilityTimer);
  }, []);
  
  // Effet pour la rotation du carrousel
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % solutions.length);
    }, 3000);
    
    return () => clearInterval(carouselInterval);
  }, [solutions.length]);
  
  // Fonction pour générer les points lumineux aléatoires
  const generateLightPoints = () => {
    const container = lightPointsRef.current;
    const numberOfPoints = 20;
    
    // Nettoyer les points existants si nécessaire
    container.innerHTML = '';
    
    for (let i = 0; i < numberOfPoints; i++) {
      const point = document.createElement('div');
      point.classList.add('light-dot', 'animated');
      
      // Taille aléatoire entre 5 et 15px
      const size = Math.random() * 10 + 5;
      
      // Position aléatoire
      const topPos = Math.random() * 100;
      const leftPos = Math.random() * 100;
      
      // Opacité aléatoire
      const opacity = Math.random() * 0.5 + 0.3;
      
      // Délai d'animation aléatoire
      const delay = Math.random() * 5;
      
      // Appliquer les styles
      point.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${topPos}%;
        left: ${leftPos}%;
        opacity: ${opacity};
        --dot-delay: ${delay};
      `;
      
      container.appendChild(point);
    }
  };
  
  // Gérer le clic sur l'indicateur de défilement
  const handleScrollClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="banner">
      {/* Éléments d'arrière-plan décoratifs */}
      <div className="background-elements">
        <div className="grid-pattern"></div>
        
        {/* Points lumineux générés dynamiquement */}
        <div id="lightPoints" ref={lightPointsRef}></div>
        
        {/* Halos lumineux */}
        <div className="light-halo halo-blue"></div>
        <div className="light-halo halo-purple"></div>
      </div>
      
      {/* Badge d'expertise */}
      <div className="expertise-badge">
        Experts en transformation digitale
      </div>

      <div className="container">
        <div className={`banner-content fade-in ${isVisible ? 'visible' : ''}`}>
          <h1 className="banner-title">
            La plateforme de <span className="highlight">NiaTech</span>
          </h1>

          <div className="separator animated"></div>

          <p className="banner-subtitle">
            Votre partenaire pour la transformation digitale de votre entreprise
          </p>

          {/* Carrousel de solutions */}
          <div className="solution-carousel">
            {solutions.map((solution, index) => (
              <p 
                key={index}
                className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
                data-index={index}
              >
                {solution}
              </p>
            ))}
          </div>

          <p className="banner-description">
            Une équipe d'experts passionnés pour un accompagnement personnalisé 
            et optimiser votre performance
          </p>

          <div className="button-container">
            <button className="button-primary">Découvrir nos solutions</button>
            <button className="button-outlined">Consultation gratuite</button>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="scroll-indicator" onClick={handleScrollClick}>
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
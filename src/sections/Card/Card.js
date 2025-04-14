import * as React from 'react';
import { useState, useEffect } from 'react';
import './Card.css';
import RepeatedCards from '../../RepeatedItems/RepeatedCards';
// Images des services
import devImage from '../../assets/images/dev.png';
import cloudImage from '../../assets/images/cloud.png';
import securityImage from '../../assets/images/security.png';
import aiImage from '../../assets/images/ai.png';
import consultingImage from '../../assets/images/consulting.png';
import Header from '../../RepeatedItems/Header';

export default function Card() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [filter, setFilter] = useState('all');
  const [animate, setAnimate] = useState(false);

  // Données des cartes enrichies avec plus d'informations et de catégories
  const cardData = [
    {
      id: 1,
      title: 'Développement',
      description: 'Création de solutions logicielles sur mesure pour répondre à vos besoins spécifiques.',
      image: devImage,
      category: 'creation',
      features: ['Applications Web & Mobile', 'Interfaces Utilisateur', 'APIs & Intégrations']
    },
    {
      id: 2,
      title: 'Cloud',
      description: 'Migration, gestion et optimisation de vos infrastructures cloud pour plus de flexibilité.',
      image: cloudImage,
      category: 'infrastructure',
      features: ['Migration AWS/Azure/GCP', 'Architecture Cloud', 'Scaling & Performance']
    },
    {
      id: 3,
      title: 'Sécurité',
      description: 'Services complets pour assurer la protection de vos données et systèmes informatiques.',
      image: securityImage,
      category: 'protection',
      features: ['Audit de Sécurité', 'Protection des Données', 'Conformité RGPD']
    },
    {
      id: 4,
      title: 'Intelligence Artificielle',
      description: 'Intégration de solutions d\'IA pour automatiser et optimiser vos processus métiers.',
      image: aiImage,
      category: 'innovation',
      features: ['Machine Learning', 'Traitement du Langage', 'Analyse Prédictive']
    },
    {
      id: 5,
      title: 'Conseil',
      description: 'Accompagnement stratégique pour votre transformation digitale et vos projets technologiques.',
      image: consultingImage,
      category: 'strategie',
      features: ['Transformation Digitale', 'Optimisation IT', 'Gestion de Projet']
    },
  ];

  // Catégories pour le filtrage
  const categories = [
    { id: 'all', label: 'Tous les services' },
    { id: 'creation', label: 'Création' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'protection', label: 'Protection' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'strategie', label: 'Stratégie' }
  ];

  // Animation à l'entrée des cartes
  useEffect(() => {
    // Afficher les cartes progressivement
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Filtrage des cartes
  useEffect(() => {
    setAnimate(false);
    
    // Réinitialiser pour l'animation de transition
    setTimeout(() => {
      if (filter === 'all') {
        setVisibleCards(cardData);
      } else {
        setVisibleCards(cardData.filter(card => card.category === filter));
      }
      setAnimate(true);
    }, 300);
  }, [filter]);

  // Initialisation
  useEffect(() => {
    setVisibleCards(cardData);
  }, []);

  return (
    <div className="services-section">
      {/* En-tête de section avec style amélioré */}
      <Header animate={true}>Nos Services</Header>
      
      {/* Filtres de catégories */}
      <div className="category-filters">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Description de la section */}
      <p className="section-description">
        Découvrez notre gamme complète de services adaptés à vos besoins de transformation digitale
      </p>
      
      {/* Conteneur des cartes avec effet de grille responsive */}
      <div className={`cards ${animate ? 'animate' : ''}`}>
        {visibleCards.map((card, index) => (
          <div 
            className="card-wrapper"
            key={card.id}
            style={{
              animationDelay: `${index * 0.1}s`,
              transform: animate ? 'translateY(0)' : 'translateY(20px)',
              opacity: animate ? 1 : 0,
              transition: 'transform 0.5s ease, opacity 0.5s ease'
            }}
          >
            <RepeatedCards
              title={card.title}
              description={card.description}
              image={card.image}
              features={card.features}
              category={card.category}
            />
          </div>
        ))}
      </div>

      {/* Appel à l'action */}
      <div className="services-cta">
        <p>Besoin d'un service spécifique pour votre entreprise ?</p>
        <button className="cta-button">Demander un devis personnalisé</button>
      </div>
    </div>
  );
}
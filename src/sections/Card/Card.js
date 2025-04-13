import * as React from 'react';
import './Card.css';
import RepeatedCards from '../../RepeatedItems/RepeatedCards';
// J'ai remplacé les images par des noms plus explicites correspondant aux services.
import devImage from '../../assets/images/dev.png';
import cloudImage from '../../assets/images/cloud.png';
import securityImage from '../../assets/images/security.png';
import Header from '../../RepeatedItems/Header';

export default function Card() {
  // Données des cartes (services) reprenant celles de la Navbar
  const cardData = [
    {
      title: 'Développement',
      description: 'Création de solutions logicielles sur mesure pour répondre à vos besoins.',
      image: devImage,
    },
    {
      title: 'Cloud',
      description: 'Migration, gestion et optimisation de vos infrastructures cloud.',
      image: cloudImage,
    },
    {
      title: 'Sécurité',
      description: 'Services complets pour assurer la sécurité de vos données et systèmes.',
      image: securityImage,
    },
  ];

  return (
    <>
      {/* En-tête de section */}
      <Header>Nos Services</Header>
      <div className='cards'>
        {cardData.map((card, index) => (
          // L'utilisation d'une clé unique (ici l'index, à remplacer éventuellement par un identifiant unique)
          <RepeatedCards
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
}

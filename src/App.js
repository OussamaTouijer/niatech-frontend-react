import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import Services from './sections/Services/Services';
import Banner from './sections/Banner/Banner';
import Contact from './sections/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Définition des liens de réseaux sociaux, liens rapides et infos de contact
  const socialLinks = [
    { link: 'https://facebook.com', icon: 'fab fa-facebook' },
    { link: 'https://twitter.com', icon: 'fab fa-twitter' },
    { link: 'https://linkedin.com', icon: 'fab fa-linkedin' },
  ];

  const quickLinks = [
    { path: '/about', display: 'À propos' },
    { path: '/services', display: 'Nos services' },
    { path: '/contact', display: 'Contactez-nous' },
  ];

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', label: 'Adresse', value: 'Salé, Maroc' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'oussama5touijer@gmail.com' },
    { icon: 'fas fa-phone', label: 'Téléphone', value: '+212 6 56 15 93 93' },
  ];

  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          {/* Page d'accueil */}
          <Route
            path="/"
            element={
              <Container>
                <Banner
                  title="NiaTech"
                  subtitle="Votre partenaire pour la transformation digitale de votre entreprise"
                  imageUrl="/path/to/tech-bg.jpg"
                  overlayOpacity={0.4}
                  height="90vh"
                  textAlign="left"
                  ctaText="Contactez nos experts"
                  ctaAction={() => window.location.href = '#contact'}
                >
                  {/* Contenu additionnel pour la bannière */}
                  <div className="custom-content">
                    <p>Contenu additionnel personnalisé pour compléter la bannière.</p>
                  </div>
                </Banner>
                <Services />
                <Contact />
              </Container>
            }
          />

          {/* Route pour À propos */}
          <Route
            path="/about"
            element={
              <Container>
                <h1>À propos</h1>
                <p>Ici vous pourrez parler de l'histoire et de l'équipe de NiaTech.</p>
              </Container>
            }
          />

          {/* Route pour Nos services */}
          <Route
            path="/services"
            element={
              <Container>
                <h1>Nos services</h1>
                <p>Présentation détaillée des services offerts par NiaTech.</p>
              </Container>
            }
          />

          {/* Route pour la page Contact */}
          <Route
            path="/contact"
            element={
              <Container>
                <h1>Contactez-nous</h1>
                <Contact />
              </Container>
            }
          />

          {/* Vous pouvez ajouter d'autres routes pour vos sections spécifiques (développement, cloud, etc.) */}
        </Routes>

        <Footer 
          socialLinks={socialLinks} 
          quickLinks={quickLinks} 
          contactInfo={contactInfo} 
          year={new Date().getFullYear()} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

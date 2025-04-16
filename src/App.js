import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import Card from './sections/Card/Card'; 
import Banner from './sections/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

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






    <div>



      <Navbar/>

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
  {/* Vous pouvez ajouter ici du contenu personnalisé */}
  <div className="custom-content">
    <p>Contenu additionnel personnalisé pour compléter la bannière.</p>
  </div>
</Banner>





        <Card/>


      </Container>   
      <Footer socialLinks={socialLinks} quickLinks={quickLinks} contactInfo={contactInfo} year={new Date().getFullYear()} />  
        </div>

       
  );
}

export default App;

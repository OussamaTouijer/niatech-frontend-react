import React from 'react';
import PropTypes from 'prop-types';
import footerLogo from '../../assets/images/logo/logoN.png';
import './Footer.css';

const Footer = ({ socialLinks, quickLinks, contactInfo, year }) => {
  return (
    <footer className="pt-16 pb-8 px-12" role="contentinfo">
      <div className="container mx-auto">
        <div className="footer-grid">

          {/* Logo Section with Semantic HTML */}
          <section className="footer-section logo-section" aria-label="Company information">
            <div className="logo-wrapper">
              <img 
                src={footerLogo} 
                alt="NiaTech Logo" 
                className="logo-hover-effect"
                loading="lazy"
              />
              <p className="logo-description">
                NiaTech est une plateforme dédiée à la transformation digitale des entreprises, offrant des solutions
                technologiques sur mesure comme le développement d'applications web et mobiles, l'intégration de systèmes
                intelligents et l'automatisation des processus métiers.
              </p>
            </div>
            
            {/* Social Links with Accessibility */}
            <nav aria-label="Social media links">
              <ul className="social-links">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.link}
                      aria-label={social.label}
                      className="social-link-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon} aria-hidden="true"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Quick Links with Semantic Navigation */}
          <nav className="footer-section" aria-label="Quick links">
            <h5 className="section-title">Découvrir</h5>
            <ul className="link-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <a href={link.path} className="link-hover-effect">
                    {link.display}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information with Semantic Address */}
          <address className="footer-section" aria-label="Contact information">
            <h5 className="section-title">Contact</h5>
            <ul className="contact-list">
              {contactInfo.map((contact, index) => (
                <li key={index} className="contact-item">
                  <div className="contact-icon">
                    <i className={contact.icon} aria-hidden="true"></i>
                  </div>
                  <p className="contact-value">{contact.value}</p>
                </li>
              ))}
            </ul>
          </address>

        </div>

        {/* Copyright Section with Dynamic Year */}
        <div className="copyright-section">
          <p>
            Copyright © {year || new Date().getFullYear()}, design and develop by
            <span className="developer-name"> Oussama TOUIJER</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired
    })
  ).isRequired,
  contactInfo: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  year: PropTypes.number
};

export default Footer;
// Contact.js
import React, { useState } from 'react';
import './Contact.css';
import Header from '../../RepeatedItems/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''  // Nouveau champ pour le sujet
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Validation du formulaire
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Valider le nom
    if (!formData.name.trim()) {
      tempErrors.name = "Le nom est obligatoire";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Le nom doit contenir au moins 2 caractères";
      isValid = false;
    }

    // Valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "L'e-mail est obligatoire";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Veuillez entrer une adresse e-mail valide";
      isValid = false;
    }

    // Valider le sujet
    if (!formData.subject.trim()) {
      tempErrors.subject = "Le sujet est obligatoire";
      isValid = false;
    }

    // Valider le message
    if (!formData.message.trim()) {
      tempErrors.message = "Le message est obligatoire";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Le message doit contenir au moins 10 caractères";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Gérer les changements des inputs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Effacer l'erreur spécifique lorsque l'utilisateur commence à écrire
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      try {
        // Simulation d'envoi vers une API
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Données du formulaire :', formData);
        setStatus({
          type: 'success',
          message: 'Message envoyé avec succès ! Nous vous contacterons bientôt.'
        });

        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        setStatus({
          type: 'error',
          message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Header animate={true}>Contact</Header>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Entrer en contact</h2>
            <p>Nous sommes là pour vous aider. Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.</p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Adresse</h3>
                  <p>123, rue Main, Ville</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Téléphone</h3>
                  <p>+212 6 00 00 00 00</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>E-mail</h3>
                  <p>contact@NiaTech.com</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user"></i> Nom :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez votre nom complet"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> E-mail :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Entrez votre adresse e-mail"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                <i className="fas fa-heading"></i> Sujet :
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet du message"
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i> Message :
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Écrivez votre message détaillé"
                className={errors.message ? 'error' : ''}
                rows="5"
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className={`submit-button ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  <span>Envoi...</span>
                </>
              ) : 'Envoyer le message'}
            </button>
          </form>
        </div>

        {status && (
          <div className={`status-message ${status.type}`}>
            <i className={`fas ${status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
            <p>{status.message}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Fade } from '@mui/material';
import { styled } from '@mui/system';
// Note: vous devrez importer votre image locale
// import bannerImage from '../../assets/images/banner.jpg';

// Wrapper de la bannière avec effets améliorés
const BannerWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  minHeight: '500px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  padding: theme.spacing(10, 0),
  background: `linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)`,
  // Si vous souhaitez conserver l'image en arrière-plan:
  // background: `url(${bannerImage}) center/cover no-repeat, linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)`,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  },

  '& *': {
    position: 'relative',
    zIndex: 2,
  },
}));

// Conteneur pour les éléments graphiques d'arrière-plan
const BackgroundElements = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  opacity: 0.2,
});

// Style du séparateur pour un look professionnel
const Separator = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '4px',
  background: 'linear-gradient(90deg, #64b5f6, #2196f3)',
  margin: '0 auto',
  marginBottom: theme.spacing(4),
}));

// Style pour le carrousel de solutions
const SolutionCarousel = styled(Box)(({ theme }) => ({
  height: '60px',
  position: 'relative',
  marginBottom: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Style pour les items du carrousel
const CarouselItem = styled(Typography)(({ isActive, theme }) => ({
  position: 'absolute',
  opacity: isActive ? 1 : 0,
  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  color: '#90caf9',
}));

// Badge d'expertise
const ExpertiseBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(3),
  right: theme.spacing(3),
  padding: theme.spacing(1, 2),
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  borderRadius: '50px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  zIndex: 10,
}));

const Banner = () => {
  // States pour les animations
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Liste des solutions offertes par NiaTech
  const solutions = [
    "Développement d'applications web et mobiles",
    "Intégration de systèmes intelligents",
    "Automatisation des processus métiers",
    "Transformation digitale sur mesure"
  ];
  
  // Effet pour les animations
  useEffect(() => {
    // Animation d'entrée
    setIsVisible(true);
    
    // Rotation du carrousel
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % solutions.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [solutions.length]);

  return (
    <BannerWrapper>
      {/* Éléments graphiques d'arrière-plan */}
      <BackgroundElements>
        {/* Grid Pattern */}
        <Box 
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Points lumineux */}
        {Array.from({ length: 20 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              borderRadius: '50%',
              backgroundColor: 'white',
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
        
        {/* Halos lumineux */}
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(66,165,245,0.4) 0%, rgba(66,165,245,0) 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(126,87,194,0.4) 0%, rgba(126,87,194,0) 70%)',
            bottom: '-50px',
            left: '-50px',
          }}
        />
      </BackgroundElements>
      
      {/* Badge d'expertise */}
      <ExpertiseBadge>
        <Typography variant="caption" sx={{ fontWeight: 500 }}>
          Experts en transformation digitale
        </Typography>
      </ExpertiseBadge>

      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={1000}>
          <Box>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                textTransform: 'uppercase',
              }}
            >
              La plateforme de <span style={{ color: '#90caf9' }}>NiaTech</span>
            </Typography>

            <Separator />

            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 400,
                mb: 3,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Votre partenaire pour la transformation digitale de votre entreprise
            </Typography>

            {/* Carrousel de solutions */}
            <SolutionCarousel>
              {solutions.map((solution, index) => (
                <CarouselItem 
                  key={index}
                  variant="h6" 
                  component="p"
                  isActive={index === activeSlide}
                >
                  {solution}
                </CarouselItem>
              ))}
            </SolutionCarousel>

            <Typography
              variant="body1"
              component="p"
              sx={{
                mb: 5,
                maxWidth: '700px',
                mx: 'auto',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Une équipe d'experts passionnés pour un accompagnement personnalisé 
              et optimiser votre performance
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(33, 150, 243, 0.4)'
                  }
                }}
              >
                Découvrir nos solutions
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  color: 'white',
                  borderColor: 'white',
                  borderRadius: 2,
                  borderWidth: '2px',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.05)'
                  }
                }}
              >
                Consultation gratuite
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>

      {/* Indicateur de défilement */}
      <Box 
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateX(-50%) translateY(0)'
            },
            '40%': {
              transform: 'translateX(-50%) translateY(-20px)'
            },
            '60%': {
              transform: 'translateX(-50%) translateY(-10px)'
            }
          }
        }}
      >
        <Box 
          component="svg"
          sx={{
            width: 24,
            height: 24,
            color: 'white'
          }}
          viewBox="0 0 24 24"
        >
          <path 
            fill="currentColor"
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </Box>
      </Box>
    </BannerWrapper>
  );
};

export default Banner;
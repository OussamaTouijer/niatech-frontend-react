import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

// Remplacez '/path/to/your/black-image.jpg' par le chemin réel de votre image de fond
const BannerWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  padding: theme.spacing(10, 0),
  background: `url('/path/to/your/black-image.jpg') center/cover no-repeat, #000`,
  // Ajout d'un overlay pour renforcer la lisibilité du texte
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  // Les contenus internes doivent apparaître au-dessus de l'overlay
  '& *': {
    position: 'relative',
    zIndex: 2,
  },
}));

const Banner = () => {
  return (
    <BannerWrapper>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            textTransform: 'uppercase',
          }}
        >
          Solutions Technologiques Innovantes
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{
            fontWeight: 400,
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          Nous transformons votre vision digitale en réalité avec nos services IT
          sur-mesure
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <Button variant="contained" color="primary" size="large">
            Découvrir nos services
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': { borderColor: 'white' },
            }}
            size="large"
          >
            Contactez-nous
          </Button>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

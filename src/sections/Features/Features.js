import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Header from '../../RepeatedItems/Header';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <CodeIcon color="primary" style={{ fontSize: 50 }} />,
      title: "Développement sur mesure",
      desc: "Des solutions logicielles adaptées à vos besoins spécifiques."
    },
    {
      icon: <CloudIcon color="primary" style={{ fontSize: 50 }} />,
      title: "Infrastructure Cloud",
      desc: "Optimisation et migration vers le cloud pour plus d'agilité."
    },
    {
      icon: <SecurityIcon color="primary" style={{ fontSize: 50 }} />,
      title: "Sécurité renforcée",
      desc: "Protection avancée de vos données et systèmes."
    },
    {
      icon: <SupportAgentIcon color="primary" style={{ fontSize: 50 }} />,
      title: "Support 24/7",
      desc: "Une assistance technique disponible à tout moment."
    },
  ];

  return (
    <Box className="features-section">
      {/* Titre de la section reprenant le thème de vos services */}
      <Header>Fonctionnalités</Header>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box className="feature-card" textAlign="center" p={2}>
              {feature.icon}
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2">
                {feature.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;

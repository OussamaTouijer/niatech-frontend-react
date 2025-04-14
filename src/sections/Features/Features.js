// import React, { useState } from 'react';
// import { Box, Typography, Grid, Card, CardContent, IconButton, Divider, Zoom, useTheme, useMediaQuery } from '@mui/material';
// import CodeIcon from '@mui/icons-material/Code';
// import CloudIcon from '@mui/icons-material/Cloud';
// import SecurityIcon from '@mui/icons-material/Security';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import WorkIcon from '@mui/icons-material/Work';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Header from '../../RepeatedItems/Header';
// import './Features.css';

// const Features = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [hoveredFeature, setHoveredFeature] = useState(null);

//   const features = [
//     {
//       icon: <CodeIcon style={{ fontSize: 60 }} />,
//       title: "Développement sur mesure",
//       desc: "Des solutions logicielles adaptées à vos besoins spécifiques, développées avec les technologies les plus récentes par notre équipe d'experts.",
//       path: "/services/developpement"
//     },
//     {
//       icon: <CloudIcon style={{ fontSize: 60 }} />,
//       title: "Infrastructure Cloud",
//       desc: "Optimisation et migration vers le cloud pour plus d'agilité, de sécurité et de réduction des coûts. Solutions AWS, Azure et Google Cloud.",
//       path: "/services/cloud"
//     },
//     {
//       icon: <SecurityIcon style={{ fontSize: 60 }} />,
//       title: "Sécurité renforcée",
//       desc: "Protection avancée de vos données et systèmes avec audits réguliers, tests d'intrusion et mesures préventives contre les cybermenaces.",
//       path: "/services/securite"
//     },
//     {
//       icon: <SupportAgentIcon style={{ fontSize: 60 }} />,
//       title: "Support 24/7",
//       desc: "Une assistance technique disponible à tout moment pour résoudre rapidement vos problèmes et garantir une continuité de service optimale.",
//       path: "/services/support"
//     },
//     {
//       icon: <SmartToyIcon style={{ fontSize: 60 }} />,
//       title: "Intelligence Artificielle",
//       desc: "Intégration de solutions d'IA pour automatiser vos processus, analyser vos données et optimiser votre prise de décision.",
//       path: "/services/ia"
//     },
//     {
//       icon: <WorkIcon style={{ fontSize: 60 }} />,
//       title: "Conseil en technologie",
//       desc: "Accompagnement stratégique pour votre transformation digitale, optimisation de vos processus et choix technologiques.",
//       path: "/services/conseil"
//     },
//   ];

//   const handleFeatureHover = (index) => {
//     setHoveredFeature(index);
//   };

//   const handleFeatureLeave = () => {
//     setHoveredFeature(null);
//   };

//   const navigateTo = (path) => {
//     console.log(`Navigating to: ${path}`);
//     // Ici, vous pouvez implémenter la navigation réelle avec react-router ou autre
//   };

//   return (
//     <Box className="features-section" sx={{ 
//       py: 8,
//       background: 'linear-gradient(180deg, rgba(240,249,255,0) 0%, rgba(224,242,254,0.5) 100%)'
//     }}>
//       <Header>Nos services</Header>       
//       <Box className="container" sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
//         {/* En-tête de section avec titre et sous-titre */}
    
//         <Box mb={6} textAlign="center">

//           <Typography 
//             variant="subtitle1" 
//             sx={{ 
//               maxWidth: 700, 
//               mx: 'auto', 
//               mt: 2,
//               color: 'text.secondary',
//               fontSize: '1.1rem'
//             }}
//           >
//             Découvrez notre gamme complète de services technologiques conçus pour propulser 
//             votre entreprise vers de nouveaux sommets
//           </Typography>
//         </Box>

//         {/* Grille de fonctionnalités */}
//         <Grid container spacing={4} justifyContent="center">
//           {features.map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
//                 <Card 
//                   className="feature-card" 
//                   elevation={hoveredFeature === index ? 8 : 2}
//                   sx={{
//                     height: '100%',
//                     borderRadius: 3,
//                     transition: 'all 0.3s ease',
//                     transform: hoveredFeature === index ? 'translateY(-8px)' : 'none',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&::before': {
//                       content: '""',
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       width: '100%',
//                       height: '4px',
//                       background: theme.palette.primary.main,
//                       opacity: hoveredFeature === index ? 1 : 0,
//                       transition: 'opacity 0.3s ease'
//                     },
//                     cursor: 'pointer'
//                   }}
//                   onMouseEnter={() => handleFeatureHover(index)}
//                   onMouseLeave={handleFeatureLeave}
//                   onClick={() => navigateTo(feature.path)}
//                 >
//                   <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
//                     <Box 
//                       sx={{ 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         mb: 2,
//                         color: theme.palette.primary.main,
//                         transition: 'transform 0.3s ease',
//                         transform: hoveredFeature === index ? 'scale(1.1)' : 'scale(1)'
//                       }}
//                     >
//                       {feature.icon}
//                     </Box>
                    
//                     <Typography 
//                       variant="h5" 
//                       gutterBottom 
//                       sx={{ 
//                         fontWeight: 600, 
//                         mb: 1,
//                         transition: 'color 0.3s ease',
//                         color: hoveredFeature === index ? theme.palette.primary.main : 'inherit'
//                       }}
//                     >
//                       {feature.title}
//                     </Typography>
                    
//                     <Divider sx={{ width: '60px', my: 2, height: '2px', backgroundColor: theme.palette.primary.main }} />
                    
//                     <Typography 
//                       variant="body1" 
//                       sx={{ 
//                         mb: 2,
//                         flexGrow: 1,
//                         color: 'text.secondary'
//                       }}
//                     >
//                       {feature.desc}
//                     </Typography>
                    
//                     <Box 
//                       sx={{ 
//                         display: 'flex', 
//                         justifyContent: 'flex-end',
//                         mt: 'auto'
//                       }}
//                     >
//                       <IconButton
//                         color="primary"
//                         size="small"
//                         sx={{
//                           transform: hoveredFeature === index ? 'translateX(4px)' : 'none',
//                           transition: 'transform 0.3s ease'
//                         }}
//                       >
//                         <ArrowForwardIcon />
//                       </IconButton>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Zoom>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Bouton CTA optionnel en bas de section */}
//         <Box mt={6} textAlign="center">
//           <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
//             Besoin d'un service personnalisé pour votre projet ?
//           </Typography>
//           <Box 
//             component="button"
//             onClick={() => navigateTo('/contact')}
//             sx={{
//               backgroundColor: theme.palette.primary.main,
//               color: 'white',
//               py: 1.5,
//               px: 4,
//               borderRadius: 50,
//               border: 'none',
//               fontSize: '1rem',
//               fontWeight: 600,
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 4px 14px rgba(0, 118, 255, 0.39)',
//               '&:hover': {
//                 transform: 'translateY(-3px)',
//                 boxShadow: '0 6px 20px rgba(0, 118, 255, 0.4)'
//               }
//             }}
//           >
//             Discutez avec nos experts
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Features;
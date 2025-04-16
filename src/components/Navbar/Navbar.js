import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
  CssBaseline,
  Menu,
  MenuItem,
  Fade,
  Avatar,
  Collapse,
  Tooltip,
  Button,
  useTheme,
  useMediaQuery,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  SmartToy as AIIcon,
  Work as ConsultingIcon,
  ContactMail as ContactIcon,
  Home as HomeIcon,
  Info as AboutIcon,
  KeyboardArrowDown as ArrowDownIcon,
  ExpandLess,
  ExpandMore,
  ChevronRight,
  Call as CallIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Language as LanguageIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

import logo from '../../assets/images/logo/logoN.png';
import logoWhite from '../../assets/images/logo/logoB.png';
import './Navbar.css';

const navItems = [
  { text: 'Accueil', icon: <HomeIcon />, path: '/' },
  {
    text: 'Services',
    icon: <CodeIcon />,
    dropdown: [
      {
        text: 'Développement',
        icon: <CodeIcon />,
        path: '/services/developpement',
        description: 'Solutions logicielles sur mesure',
      },
      {
        text: 'Cloud',
        icon: <CloudIcon />,
        path: '/services/cloud',
        description: 'Migration et optimisation cloud',
      },
      {
        text: 'Sécurité',
        icon: <SecurityIcon />,
        path: '/services/securite',
        description: 'Protection de vos données',
      },
      {
        text: 'Intelligence Artificielle',
        icon: <AIIcon />,
        path: '/services/ia',
        description: "Solutions d'IA avancées",
      },
      {
        text: 'Conseil',
        icon: <ConsultingIcon />,
        path: '/services/conseil',
        description: 'Transformation digitale',
      },
    ],
  },
  { text: 'À propos', icon: <AboutIcon />, path: '/about' },
  { text: 'Contact', icon: <ContactIcon />, path: '/contact' },
];

const Navbar = ({ window: windowProp, darkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState('');
  const [activePath, setActivePath] = useState('/');
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('FR');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const path = window.location.pathname;
    setActivePath(path);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMenuOpen = (event, menuName) => {
    setMenuAnchor(event.currentTarget);
    setCurrentMenu(menuName);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setCurrentMenu(null);
  };

  const handleSubMenuToggle = (menuName) => {
    setExpandedSubmenu(expandedSubmenu === menuName ? '' : menuName);
  };

  const isActive = (path) => {
    if (path === '/') return activePath === path;
    return activePath.startsWith(path);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchor(null);
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    handleLanguageMenuClose();
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setActivePath(path);
    if (isMobile) handleDrawerToggle();
    handleMenuClose();
  };

  const drawer = (
    <Box className="drawer-box">
      <Box className="drawer-header">
        <Avatar
          src={darkMode ? logoWhite : logo}
          alt="NiaTech Logo"
          className="drawer-avatar"
          sx={{ width: 80, height: 80, borderRadius: '12px', padding: '8px' }}
        />
        <Box className="drawer-actions">
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton onClick={handleLanguageMenuOpen} color="inherit">
            <Badge badgeContent={currentLanguage} color="primary">
              <LanguageIcon />
            </Badge>
          </IconButton>
        </Box>
      </Box>

      <Divider />

      <List className="drawer-list">
        {navItems.map((item) => (
          <React.Fragment key={item.text}>
            {item.dropdown ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    className={`drawer-item ${expandedSubmenu === item.text ? 'active' : ''}`}
                    onClick={() => handleSubMenuToggle(item.text)}
                  >
                    <Box className="drawer-icon">{item.icon}</Box>
                    <ListItemText primary={item.text} />
                    {expandedSubmenu === item.text ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={expandedSubmenu === item.text} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {item.dropdown.map((subItem) => (
                      <ListItem key={subItem.text} disablePadding>
                        <ListItemButton
                          className={`drawer-item drawer-subitem ${isActive(subItem.path) ? 'active' : ''}`}
                          onClick={() => navigateTo(subItem.path)}
                        >
                          <Box className="drawer-icon">{subItem.icon}</Box>
                          <ListItemText primary={subItem.text} secondary={subItem.description} />
                          <ChevronRight fontSize="small" />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem disablePadding>
                <ListItemButton
                  className={`drawer-item ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => navigateTo(item.path)}
                >
                  <Box className="drawer-icon">{item.icon}</Box>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>

      <Box className="drawer-footer">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="cta-button"
          startIcon={<CallIcon />}
          onClick={() => navigateTo('/devis')}
        >
          Demander un devis
        </Button>
      </Box>
    </Box>
  );

  const languageMenu = (
    <Menu
      anchorEl={languageAnchor}
      open={Boolean(languageAnchor)}
      onClose={handleLanguageMenuClose}
      TransitionComponent={Fade}
    >
      <MenuItem onClick={() => changeLanguage('FR')} selected={currentLanguage === 'FR'}>
        Français
      </MenuItem>
      <MenuItem onClick={() => changeLanguage('EN')} selected={currentLanguage === 'EN'}>
        English
      </MenuItem>
      <MenuItem onClick={() => changeLanguage('ES')} selected={currentLanguage === 'ES'}>
        Español
      </MenuItem>
    </Menu>
  );

  const container = windowProp !== undefined ? () => windowProp().document.body : undefined;

  return (
    <Box className="navbar-root" sx={{ mb: 8 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        className={`app-bar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : 'light-mode'}`}
        elevation={scrolled ? 4 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar className="toolbar" disableGutters>
            <Box className="logo-box" sx={{ display: 'flex', alignItems: 'center' }}>
              {isMobile && (
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className="menu-button"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Tooltip title="NiaTech - Retour à l'accueil">
                <Avatar
                  src={darkMode ? logoWhite : logo}
                  alt="NiaTech Logo"
                  className="avatar-desktop"
                  onClick={() => navigateTo('/')}
                  sx={{
                    cursor: 'pointer',
                    width: isMobile ? 50 : 160,
                    height: isMobile ? 50 : 55,
                    borderRadius: '12px',
                    ml: isMobile ? 1 : 0,
                  }}
                />
              </Tooltip>
            </Box>

            {!isMobile && (
              <Box
                className="desktop-menu"
                sx={{
                  display: 'flex',
                  flexGrow: 1,
                  justifyContent: 'center',
                  gap: isTablet ? 1 : 2,
                }}
              >
                {navItems.map((item) =>
                  item.dropdown ? (
                    <React.Fragment key={item.text}>
                      <Button
                        onClick={(e) => handleMenuOpen(e, item.text)}
                        endIcon={
                          <ArrowDownIcon
                            sx={{
                              color: currentMenu === item.text ? '#48BAF0' : 'inherit',
                              transition: 'transform 0.3s ease',
                              transform: currentMenu === item.text ? 'rotate(180deg)' : 'rotate(0)',
                            }}
                          />
                        }
                        className={`nav-button ${
                          currentMenu === item.text ||
                          (item.dropdown && item.dropdown.some((sub) => isActive(sub.path)))
                            ? 'active'
                            : ''
                        }`}
                        sx={{
                          fontSize: isTablet ? '0.85rem' : '0.95rem',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            width: currentMenu === item.text ? '80%' : '0%',
                            height: '3px',
                            backgroundColor: '#48BAF0',
                            transition: 'all 0.3s ease',
                            transform: 'translateX(-50%)',
                          },
                          '&:hover': {
                            backgroundColor: 'rgba(72, 186, 240, 0.1)',
                            '&:after': {
                              width: '50%',
                            },
                          },
                        }}
                      >
                        {item.text}
                      </Button>
                      <Menu
                        anchorEl={menuAnchor}
                        open={currentMenu === item.text}
                        onClose={handleMenuClose}
                        TransitionComponent={Fade}
                        className="menu-dropdown"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                        sx={{
                          '& .MuiPaper-root': {
                            borderRadius: 2,
                            mt: 1.5,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                            minWidth: 220,
                          },
                        }}
                      >
                        {item.dropdown.map((subItem) => (
                          <MenuItem
                            key={subItem.text}
                            onClick={() => {
                              handleMenuClose();
                              navigateTo(subItem.path);
                            }}
                            className={`dropdown-item ${isActive(subItem.path) ? 'active-item' : ''}`}
                            sx={{
                              py: 1.5,
                              display: 'flex',
                              alignItems: 'flex-start',
                              borderLeft: isActive(subItem.path) ? '3px solid #48BAF0' : '3px solid transparent',
                              '&:hover': {
                                backgroundColor: 'rgba(72, 186, 240, 0.08)',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                ml: 1,
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <Box className="icon" sx={{ mr: 1, color: '#48BAF0' }}>
                                  {subItem.icon}
                                </Box>
                                <Box component="span" sx={{ fontWeight: 'bold' }}>
                                  {subItem.text}
                                </Box>
                              </Box>
                              <Box component="span" sx={{ fontSize: '0.75rem', opacity: 0.7 }}>
                                {subItem.description}
                              </Box>
                            </Box>
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  ) : (
                    <Button
                      key={item.text}
                      className={`nav-button ${isActive(item.path) ? 'active' : ''}`}
                      onClick={() => navigateTo(item.path)}
                      sx={{
                        fontSize: isTablet ? '0.85rem' : '0.95rem',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: isActive(item.path) ? '80%' : '0%',
                          height: '3px',
                          backgroundColor: '#48BAF0',
                          transition: 'all 0.3s ease',
                          transform: 'translateX(-50%)',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(72, 186, 240, 0.1)',
                          '&:after': {
                            width: '50%',
                          },
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  )
                )}
              </Box>
            )}

            <Box
              className="navbar-actions"
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: 'auto',
                gap: 1,
              }}
            >
              {!isMobile && (
                <>
                  <IconButton color="inherit" onClick={toggleSearch}>
                    <SearchIcon />
                  </IconButton>

                  <IconButton color="inherit" onClick={toggleDarkMode}>
                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>

                  <IconButton color="inherit" onClick={handleLanguageMenuOpen}>
                    <Badge badgeContent={currentLanguage} color="primary" sx={{ '& .MuiBadge-badge': { fontSize: '0.65rem' } }}>
                      <LanguageIcon />
                    </Badge>
                  </IconButton>
                </>
              )}

              <Button
                variant="contained"
                color="primary"
                className="cta-button"
                startIcon={!isMobile && <CallIcon />}
                onClick={() => navigateTo('/devis')}
                sx={{
                  px: isMobile ? 2 : 3,
                  py: 1,
                  borderRadius: '50px',
                  boxShadow: '0 4px 12px rgba(72, 186, 240, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(72, 186, 240, 0.5)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {isMobile ? 'Devis' : 'Demander un devis'}
              </Button>
            </Box>
          </Toolbar>

          <Collapse in={searchOpen}>
            <Box
              sx={{
                py: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <input
                type="text"
                placeholder="Rechercher un service..."
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '50px',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  color: 'inherit',
                  fontSize: '1rem',
                }}
              />
              <Button variant="contained" color="primary" sx={{ borderRadius: '50px', px: 3 }}>
                Rechercher
              </Button>
              <IconButton onClick={toggleSearch}>
                <ExpandLess />
              </IconButton>
            </Box>
          </Collapse>
        </Container>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        className="mobile-drawer"
        PaperProps={{
          className: `drawer-paper ${darkMode ? 'dark-drawer' : 'light-drawer'}`,
          sx: {
            width: '85%',
            maxWidth: '320px',
            borderRadius: '0 16px 16px 0',
          },
        }}
      >
        {drawer}
      </Drawer>

      {languageMenu}

      <Toolbar />
      <Box sx={{ height: searchOpen ? 64 : 0, transition: 'height 0.3s ease' }} />
    </Box>
  );
};

export default Navbar;

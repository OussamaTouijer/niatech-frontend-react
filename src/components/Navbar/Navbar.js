import React, { useState, useEffect } from 'react';
import './Navbar.css';
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
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  ContactMail as ContactIcon,
  Home as HomeIcon,
  Info as AboutIcon,
  KeyboardArrowDown as ArrowDownIcon,
  ExpandLess,
  ExpandMore,
  ChevronRight,
  Call as CallIcon
} from '@mui/icons-material';
// Option A : en important via les assets (attention à l’arborescence)
// Option B : vous pouvez également placer l’image dans /public/images/...
import logo from "../../assets/images/logonoir.png";

const navItems = [
  { 
    text: 'Accueil', 
    icon: <HomeIcon />, 
    path: '/' 
  },
  {
    text: 'Services',
    icon: <CodeIcon />,
    dropdown: [
      { text: 'Développement', icon: <CodeIcon />, path: '/services/developpement' },
      { text: 'Cloud', icon: <CloudIcon />, path: '/services/cloud' },
      { text: 'Sécurité', icon: <SecurityIcon />, path: '/services/securite' }
    ]
  },
  { 
    text: 'À propos', 
    icon: <AboutIcon />, 
    path: '/about' 
  },
  { 
    text: 'Contact', 
    icon: <ContactIcon />, 
    path: '/contact' 
  }
];

const Navbar = ({ window: windowProp }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState('');
  const [activePath, setActivePath] = useState('/');

  // Détection de la taille d'écran
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    const path = window.location.pathname;
    setActivePath(path);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const navigateTo = (path) => {
    // Ici vous pouvez ajouter la navigation réelle (ex: avec react-router)
    console.log(`Navigating to: ${path}`);
    setActivePath(path);
    // Ferme le Drawer en mobile après navigation
    if (isMobile) handleDrawerToggle();
  };

  // Drawer pour mobile
  const drawer = (
    <Box className="drawer-box">
      <Box className="drawer-header">
        <Avatar 
          src={logo} 
          alt="Logo"
          className="drawer-avatar"
          sx={{ width: 70, height: 70, borderRadius: '12px' }}
        />
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
                          <ListItemText primary={subItem.text} />
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
        >
          Demander un devis
        </Button>
      </Box>
    </Box>
  );

















  
  // Pour le container du Drawer
  const container = windowProp !== undefined ? () => windowProp().document.body : undefined;

  return (
    <Box className="navbar-root">
      <CssBaseline />
      <AppBar 
        component="nav" 
        position="fixed" 
        className={`app-bar ${scrolled ? 'scrolled' : ''}`}
      >
        <Container maxWidth="xl">
          <Toolbar className="toolbar">
            <Box className="logo-box">
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

              <Tooltip title="NiaTech">
                {/* Pour de meilleures pratiques, vous pouvez aussi envisager d’utiliser une image depuis le dossier public */}
                <Avatar 
                  src={logo}
                  alt="Logo"
                  className="avatar-desktop"
                  onClick={() => navigateTo('/')}
                  sx={{ 
                    cursor: 'pointer',
                    width: isMobile ? 0 : 180,
                    height: isMobile ? 0 : 60,
                    borderRadius: '12px'
                  }}
                />
              </Tooltip>
            </Box>

            {/* Menu de navigation version desktop */}
            {!isMobile && (
              <Box className="desktop-menu">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <React.Fragment key={item.text}>
                      <Button
                        onClick={(e) => handleMenuOpen(e, item.text)}
                        endIcon={<ArrowDownIcon sx={{ color: currentMenu === item.text ? '#48BAF0' : 'white' }} />}
                        className={`nav-button ${currentMenu === item.text ? 'active' : ''}`}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(72, 186, 240, 0.1)'
                          }
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
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        {item.dropdown.map((subItem) => (
                          <MenuItem 
                            key={subItem.text} 
                            onClick={() => {
                              handleMenuClose();
                              navigateTo(subItem.path);
                            }}
                            className="dropdown-item"
                          >
                            <Box className="icon">{subItem.icon}</Box>
                            {subItem.text}
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  ) : (
                    <Button 
                      key={item.text} 
                      className={`nav-button ${isActive(item.path) ? 'active' : ''}`}
                      onClick={() => navigateTo(item.path)}
                    >
                      {item.text}
                    </Button>
                  )
                )}
              </Box>
            )}

            <Button 
              variant="contained" 
              color="primary" 
              className="cta-button"
              startIcon={<CallIcon />}
            >
              Demander un devis
            </Button>


          </Toolbar>
        </Container>
      </AppBar>

      {/* Affichage du Drawer uniquement en mobile */}
      {isMobile && (
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          className="mobile-drawer"
          PaperProps={{ className: 'drawer-paper' }}
        >
          {drawer}
        </Drawer>
      )}
      
      <Toolbar />
    </Box>
  );
};

export default Navbar;

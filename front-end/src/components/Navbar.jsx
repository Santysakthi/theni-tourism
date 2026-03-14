import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  useScrollTrigger,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Map as MapIcon,
  LocalPostOffice as PackageIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? 'rgba(255, 255, 255, 0.9)' : 'white',
      backdropFilter: trigger ? 'blur(10px)' : 'none',
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: 'divider',
      transition: 'all 0.3s ease-in-out',
    },
  });
}

const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'Explore Map', path: '/map', icon: <MapIcon /> },
    { name: 'Packages', path: '/packages', icon: <PackageIcon /> },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 800, color: 'primary.main' }}>
        Theni <Box component="span" sx={{ color: 'text.primary' }}>Tourism</Box>
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={RouterLink} to={item.path} sx={{ borderRadius: 2 }}>
              <ListItemIcon color="primary">{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
        {user ? (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ borderRadius: 2, color: 'error.main' }}>
              <ListItemIcon><LogoutIcon color="error" /></ListItemIcon>
              <ListItemText primary="Logout" primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/login" sx={{ borderRadius: 2 }}>
                <ListItemIcon><LoginIcon /></ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton 
                component={RouterLink} 
                to="/register" 
                sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  borderRadius: 2,
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              >
                <ListItemIcon><RegisterIcon sx={{ color: 'white' }} /></ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky" color="inherit">
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ height: 72 }}>
              <Typography
                variant="h5"
                component={RouterLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: 'primary.main',
                }}
              >
                Theni <Box component="span" sx={{ color: 'text.primary' }}>Tourism</Box>
              </Typography>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    component={RouterLink}
                    to={link.path}
                    startIcon={link.icon}
                    color="inherit"
                    sx={{ fontWeight: 600, px: 2, '&:hover': { color: 'primary.main' } }}
                  >
                    {link.name}
                  </Button>
                ))}

                {user ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogout}
                    startIcon={<LogoutIcon />}
                    sx={{ ml: 2 }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Box sx={{ ml: 2, display: 'flex', gap: 2 }}>
                    <Button component={RouterLink} to="/login" color="inherit" sx={{ fontWeight: 600 }}>
                      Login
                    </Button>
                    <Button component={RouterLink} to="/register" variant="contained" color="primary">
                      Register
                    </Button>
                  </Box>
                )}
              </Box>

              {/* Mobile Menu Icon */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, borderRadius: '20px 0 0 20px' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;

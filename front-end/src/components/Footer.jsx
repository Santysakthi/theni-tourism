import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'grey.300', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'white' }}>
                Theni <Box component="span" sx={{ color: 'primary.main' }}>Tourism</Box>
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                Discover the natural beauty, rich culture, and hidden gems of Theni District. Your gateway to an unforgettable travel experience in Southern India.
              </Typography>
              <Stack direction="row" spacing={1}>
                {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                  <IconButton key={idx} size="small" sx={{ color: 'grey.400', '&:hover': { color: 'primary.main' } }}>
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>Explore</Typography>
            <Stack spacing={1.5}>
              {[
                { name: 'Popular Places', path: '/' },
                { name: 'Map Explorer', path: '/map' },
                { name: 'Tour Packages', path: '/packages' },
                { name: 'Join Community', path: '/register' }
              ].map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{ color: 'grey.400', fontSize: '0.9rem', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>Services</Typography>
            <Stack spacing={1.5}>
              {['Transport Guide', 'Accommodations', 'Local Guides', 'Security Info'].map((name) => (
                <Link
                  key={name}
                  href="#"
                  sx={{ color: 'grey.400', fontSize: '0.9rem', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                >
                  {name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>Contact Us</Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOn sx={{ color: 'primary.main', fontSize: '1.2rem', mt: 0.3 }} />
                <Typography variant="body2">District Tourism Office, Theni, Tamil Nadu 625531</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                <Typography variant="body2">+91 4546 250000</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                <Typography variant="body2">info@thenitourism.com</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'grey.800', mb: 4 }} />
        
        <Typography variant="caption" align="center" display="block" sx={{ color: 'grey.600' }}>
          © {new Date().getFullYear()} SantySakthi / Theni Tourism. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

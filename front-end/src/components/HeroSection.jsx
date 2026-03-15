import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Stack, Grid, Paper } from '@mui/material';
import { Explore, ViewList } from '@mui/icons-material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1542332213-31f8734895fc?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 10s ease',
          '&:hover': { transform: 'scale(1.1)' },
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(27, 48, 34, 0.7), rgba(27, 48, 34, 0.5), rgba(27, 48, 34, 0.9))',
          }}
        />
      </Box>

      <Container maxWidth="lg" className="animate-fade-in">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 900,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            Discover <Box component="span" sx={{ color: 'secondary.main', fontStyle: 'italic', position: 'relative', '&::after': { content: '""', position: 'absolute', bottom: -5, left: 0, width: '100%', height: 4, bgcolor: 'secondary.main', opacity: 0.3, borderRadius: 2 } }}>Theni</Box> Tourism
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              maxWidth: 700,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
            }}
          >
            Experience the "Second Heaven" - Where cardamom hills meet misty valleys and serene waterfalls.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2, width: { xs: '100%', sm: 'auto' } }}>
            <Button
              component={RouterLink}
              to="/map"
              variant="contained"
              size="large"
              startIcon={<Explore />}
              sx={{ py: 2, px: 4, fontSize: '1.1rem' }}
            >
              Start Exploring
            </Button>
            <Button
              component="a"
              href="#popular-places"
              variant="outlined"
              size="large"
              sx={{
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                color: 'white',
                borderColor: 'rgba(255,255,255,0.4)',
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'secondary.main',
                  bgcolor: 'rgba(251, 192, 45, 0.1)',
                },
              }}
            >
              View Destinations
            </Button>
          </Stack>

          {/* Stats */}
          <Grid container spacing={4} sx={{ mt: 6, opacity: 0.9 }}>
            {[
              { label: 'Popular Places', value: '25+' },
              { label: 'Tour Packages', value: '15+' },
              { label: 'Yearly Visitors', value: '50k+' },
              { label: 'Rating', value: '4.8/5' }
            ].map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Typography variant="h4" sx={{ color: 'secondary.main', fontWeight: 800 }}>{stat.value}</Typography>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;

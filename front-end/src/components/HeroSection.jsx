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
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.8))',
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
            }}
          >
            Discover <Box component="span" sx={{ color: 'primary.light', fontStyle: 'italic' }}>Theni</Box> Tourism
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              maxWidth: 700,
              fontWeight: 500,
              color: 'grey.300',
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
                borderColor: 'rgba(255,255,255,0.3)',
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.2)',
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
                <Typography variant="h4" color="primary.light">{stat.value}</Typography>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 2, color: 'grey.400' }}>
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

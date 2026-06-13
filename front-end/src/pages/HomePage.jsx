import React from 'react';
import { Box, Container, Typography, Grid, Stack, Alert, AlertTitle, useTheme } from '@mui/material';
import HeroSection from '../components/HeroSection';
import PlaceCard from '../components/PlaceCard';
import Loader from '../components/Loader';
import { useGetPlacesQuery } from '../services/placesApi';

const HomePage = () => {
  const { data: places, isLoading, error } = useGetPlacesQuery();
  const theme = useTheme();

  // Background Image URL - Using a high-quality landscape for Theni vibe
  const bgImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000";

  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      // Fixed background image with overlay
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${bgImage})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      
      <HeroSection />
      
      {/* Popular Destinations Section with Glass Effect */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }} id="popular-places">
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8,
          p: 4,
          borderRadius: 8,
          backdropFilter: 'blur(10px)', // Glass effect
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}>
          <Typography variant="h2" gutterBottom sx={{ color: '#fff', fontWeight: 700 }}>
            Popular Destinations
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 3, color: 'rgba(255,255,255,0.8)' }}>
            From the misty peaks of Meghamalai to the therapeutic waters of Kumbakarai, explore the best of Theni.
          </Typography>
          <Box sx={{ width: 80, height: 6, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 3 }} />
        </Box>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert severity="error" variant="filled" sx={{ borderRadius: 4, bgcolor: 'rgba(211, 47, 47, 0.9)' }}>
            <AlertTitle>Error loading places</AlertTitle>
            Please check if the backend server is running at http://localhost:4000
          </Alert>
        ) : (
          <Grid container spacing={4}>
            {places?.map((place) => (
              <Grid item xs={12} sm={6} md={4} key={place.id}>
                <Box sx={{ 
                  transition: 'transform 0.3s ease', 
                  '&:hover': { transform: 'translateY(-10px)' } 
                }}>
                  <PlaceCard place={place} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Why Visit Section - Split Glass Panel */}
      <Box sx={{ 
        py: { xs: 10, md: 15 }, 
        position: 'relative',
        background: 'linear-gradient(180deg, transparent 0%, rgba(18, 18, 18, 0.95) 100%)'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Stack spacing={4}>
                <Typography variant="h2" sx={{ 
                  color: 'secondary.main', 
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  fontWeight: 800 
                }}>
                  Why Visit Theni?
                </Typography>
                <Stack spacing={3}>
                  {[
                    { title: 'Natural Beauty', desc: 'Lush green tea estates, cardamom plantations, and misty mountains.' },
                    { title: 'Adventure awaits', desc: 'Trekking paths in Meghamalai and boat rides in Vaigai Dam.' },
                    { title: 'Cultural Heritage', desc: 'Ancient temples and vibrant local festivals throughout the year.' },
                    { title: 'Accessibility', desc: 'Well connected by road to Madurai, Kochi, and Munnar.' }
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ 
                      display: 'flex', 
                      gap: 3, 
                      p: 2, 
                      borderRadius: 4,
                      transition: 'background 0.3s',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
                    }}>
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          borderRadius: '16px',
                          bgcolor: 'secondary.main',
                          color: 'primary.dark',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 900,
                          fontSize: '1.2rem',
                          flexShrink: 0,
                          boxShadow: '0 8px 20px rgba(251, 192, 45, 0.4)',
                        }}
                      >
                        {idx + 1}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: '#fff', mb: 0.5 }}>{item.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} lg={6}>
              <Box sx={{ position: 'relative' }}>
                {/* Decorative glowing orb background */}
                <Box sx={{
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  bgcolor: 'secondary.main',
                  filter: 'blur(100px)',
                  opacity: 0.2,
                  top: '10%',
                  right: '10%',
                  zIndex: 0
                }} />
                
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1542332213-31f8734895fc?auto=format&fit=crop&q=80&w=800"
                  alt="Theni Landscape"
                  sx={{
                    width: '100%',
                    borderRadius: 6,
                    boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
                    position: 'relative',
                    zIndex: 1,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Alert, AlertTitle } from '@mui/material';
import HeroSection from '../components/HeroSection';
import PlaceCard from '../components/PlaceCard';
import Loader from '../components/Loader';
import { useGetPlacesQuery } from '../services/placesApi';

const HomePage = () => {
  const { data: places, isLoading, error } = useGetPlacesQuery();

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <HeroSection />
      
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }} id="popular-places">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" gutterBottom>
            Popular Destinations
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
            From the misty peaks of Meghamalai to the therapeutic waters of Kumbakarai, explore the best of Theni.
          </Typography>
          <Box sx={{ width: 80, height: 6, bgcolor: 'primary.main', mx: 'auto', borderRadius: 3 }} />
        </Box>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert severity="error" variant="outlined" sx={{ borderRadius: 4 }}>
            <AlertTitle>Error loading places</AlertTitle>
            Please check if the backend server is running at http://localhost:4000
          </Alert>
        ) : (
          <Grid container spacing={4}>
            {places?.map((place) => (
              <Grid item xs={12} sm={6} md={4} key={place.id}>
                <PlaceCard place={place} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Why Visit Section */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: { xs: 10, md: 15 }, overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Stack spacing={4}>
                <Typography variant="h2">Why Visit Theni?</Typography>
                <Stack spacing={4}>
                  {[
                    { title: 'Natural Beauty', desc: 'Lush green tea estates, cardamom plantations, and misty mountains.' },
                    { title: 'Adventure awaits', desc: 'Trekking paths in Meghamalai and boat rides in Vaigai Dam.' },
                    { title: 'Cultural Heritage', desc: 'Ancient temples and vibrant local festivals throughout the year.' },
                    { title: 'Accessibility', desc: 'Well connected by road to Madurai, Kochi, and Munnar.' }
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', gap: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          flexShrink: 0,
                          boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
                        }}
                      >
                        {idx + 1}
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom>{item.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>{item.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100%',
                    height: '100%',
                    border: '8px solid rgba(255,255,255,0.05)',
                    borderRadius: 4,
                    zIndex: 0,
                  }
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1542332213-31f8734895fc?auto=format&fit=crop&q=80&w=800"
                  alt="Theni Landscape"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: 10,
                    position: 'relative',
                    zIndex: 1,
                    transform: 'rotate(2deg)',
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'rotate(0deg)' }
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

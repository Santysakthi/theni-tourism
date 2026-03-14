import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Button,
  Skeleton,
} from '@mui/material';
import {
  LocationOn as MapPinIcon,
  Info as InfoIcon,
  History as HistoryIcon,
  CardGiftcard as PackageIcon,
  Navigation as NavigationIcon,
} from '@mui/icons-material';
import { useGetPlaceBySlugQuery } from '../services/placesApi';
import { useGetServicesByPlaceQuery } from '../services/servicesApi';
import Loader from '../components/Loader';
import PackageCard from '../components/PackageCard';

const PlaceDetailsPage = () => {
  const { slug } = useParams();
  const { data: place, isLoading: isPlaceLoading, error: placeError } = useGetPlaceBySlugQuery(slug);
  
  const { data: services, isLoading: isServicesLoading } = useGetServicesByPlaceQuery(place?.id, {
    skip: !place?.id
  });

  if (isPlaceLoading) return <Loader fullScreen />;

  if (placeError || !place) {
    return (
      <Container sx={{ py: 12, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={800} color="text.primary">Place not found</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          The destination you are looking for might have been moved or removed.
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>
      {/* Hero Image Section */}
      <Box sx={{ position: 'relative', height: '60vh', color: 'white' }}>
        <Box
          component="img"
          src={place.image || 'https://images.unsplash.com/photo-1542332213-31f8734895fc?auto=format&fit=crop&q=80&w=2070'}
          alt={place.name}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'absolute', bottom: 48, left: 0, right: 0 }}>
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.light' }}>
              <MapPinIcon fontSize="small" />
              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2 }}>
                {place.location || 'Theni, Tamil Nadu'}
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
              {place.name}
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={6}>
          {/* Main Content */}
          <Grid item xs={12} lg={8}>
            <Stack spacing={6}>
              {/* Description */}
              <Box>
                <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <InfoIcon color="primary" /> About {place.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  {place.description}
                </Typography>
              </Box>

              {/* History */}
              {place.history && (
                <Paper sx={{ p: 4, bgcolor: 'white' }}>
                  <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1.5, fontWeight: 700 }}>
                    <HistoryIcon color="primary" /> Historical Background
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {place.history}
                  </Typography>
                </Paper>
              )}

              {/* Location Details */}
              <Box>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1.5, fontWeight: 700 }}>
                  <NavigationIcon color="primary" /> Location Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper variant="outlined" sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Coordinates:</Typography>
                      <Typography variant="body2" color="text.secondary">{place.coordinates || 'N/A'}</Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>

              {/* Gallery Placeholder */}
              <Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>Gallery</Typography>
                <Grid container spacing={2}>
                  {[1, 2, 3].map(i => (
                    <Grid item xs={6} sm={4} key={i}>
                      <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 3 }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} lg={4}>
            <Paper sx={{ p: 4, position: 'sticky', top: 100, borderRadius: 6 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1.5, fontWeight: 800, mb: 4 }}>
                <PackageIcon color="primary" /> Available Packages
              </Typography>

              {isServicesLoading ? (
                <Stack spacing={2}>
                  {[1, 2].map(i => <Skeleton key={i} variant="rectangular" height={120} sx={{ borderRadius: 3 }} />)}
                </Stack>
              ) : services?.length > 0 ? (
                <Stack spacing={3}>
                  {services.map(service => <PackageCard key={service.id} service={service} />)}
                </Stack>
              ) : (
                <Box sx={{ p: 4, textAlign: 'center', bgcolor: 'background.default', borderRadius: 4, border: '1px dashed', borderColor: 'divider' }}>
                  <Typography variant="body2" color="text.secondary">
                    No transport packages available for this location yet.
                  </Typography>
                </Box>
              )}

              <Button variant="contained" fullWidth size="large" sx={{ mt: 4, py: 2 }}>
                Enquire Now
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlaceDetailsPage;

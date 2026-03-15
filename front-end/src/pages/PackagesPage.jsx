import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Breadcrumbs, 
  Link,
  Stack,
  Alert
} from '@mui/material';
import { 
  NavigateNext as NavigateNextIcon,
  Home as HomeIcon,
  Map as MapIcon 
} from '@mui/icons-material';
import { useGetServicesByPlaceSlugQuery } from '../services/servicesApi';
import PackageCard from '../components/PackageCard';
import Loader from '../components/Loader';

const PackagesPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data: packages, isLoading, error } = useGetServicesByPlaceSlugQuery(slug);

  // Capitalize slug for display if needed, or use a better way to get place name
  const displayPlaceName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (isLoading) return <Loader fullScreen />;

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          sx={{ mb: 4 }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
            <MapIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {displayPlaceName}
          </Typography>
          <Typography color="text.secondary">Transport Packages</Typography>
        </Breadcrumbs>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 900 }}>
            Choose Your <Box component="span" sx={{ color: 'secondary.main' }}>Safari</Box> Experience
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800 }}>
            Available transport and tour packages for {displayPlaceName}. Book directly via WhatsApp with our trusted local providers.
          </Typography>
        </Box>

        {error ? (
          <Alert severity="error" sx={{ borderRadius: 4 }}>
            Error loading packages. Please try again later.
          </Alert>
        ) : !packages || packages.length === 0 ? (
          <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 6, bgcolor: 'background.paper', border: '1px dashed', borderColor: 'divider' }}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No packages found for {displayPlaceName}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We are currently working with local providers to bring you the best safari experiences in this area. Check back soon!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            {packages.map((pkg) => (
              <Grid item xs={12} md={6} key={pkg.id}>
                <PackageCard service={pkg} placeName={displayPlaceName} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default PackagesPage;

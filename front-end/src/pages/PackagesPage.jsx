import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Stack,
  InputAdornment,
  Paper,
} from '@mui/material';
import {
  Search as SearchIcon,
  CardTravel as PackageIcon,
} from '@mui/icons-material';
import { useGetServicesQuery } from '../services/servicesApi';
import Loader from '../components/Loader';
import PackageCard from '../components/PackageCard';

const PackagesPage = () => {
  const { data: services, isLoading, error } = useGetServicesQuery();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 12 }}>
      {/* Header */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>Tour Packages & Services</Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', maxWidth: 600, mx: 'auto' }}>
            Browse through our curated transport and tour packages to make your Theni trip comfortable and memorable.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -5 }}>
        <Paper elevation={4} sx={{ p: 2, borderRadius: 5 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={9}>
              <TextField
                fullWidth
                placeholder="Search for vehicles or providers..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: 4, bgcolor: 'grey.50' }
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                select
                fullWidth
                defaultValue="All Types"
                InputProps={{ sx: { borderRadius: 4, bgcolor: 'grey.50' } }}
              >
                {['All Types', 'Sedan', 'SUV', 'Van'].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Paper>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Box sx={{ mt: 8, textAlign: 'center', py: 8, bgcolor: 'error.light', borderRadius: 4, color: 'error.dark' }}>
            <Typography variant="h6">Failed to load packages. Please try again later.</Typography>
          </Box>
        ) : services?.length > 0 ? (
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <PackageCard service={service} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ mt: 10, textAlign: 'center', py: 12, border: '2px dashed', borderColor: 'divider', borderRadius: 8 }}>
            <PackageIcon sx={{ fontSize: 60, color: 'grey.300', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">No packages found</Typography>
            <Typography variant="body2" color="text.secondary">Try adjusting your search filters or check back later.</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default PackagesPage;

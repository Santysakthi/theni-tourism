import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Divider,
  Button,
} from '@mui/material';
import {
  LocalShipping as TruckIcon,
  AccessTime as ClockIcon,
  CurrencyRupee as RupeeIcon,
  VerifiedUser as UserCheckIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const PackageCard = ({ service }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (!user) {
      navigate('/login');
    } else {
      alert(`Booking initiated for ${service.vehicle_type || 'Private Transport'}!`);
    }
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: 4, '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.06)' } }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Box
            sx={{
              p: 1.5,
              bgcolor: 'primary.light',
              color: 'primary.main',
              borderRadius: 3,
              display: 'flex',
              opacity: 0.15
            }}
          >
            <TruckIcon fontSize="medium" />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 800, display: 'flex', alignItems: 'center' }}>
            <RupeeIcon fontSize="small" />
            {service.price}
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
          {service.vehicle_type || 'Private Transport'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 3 }}>
          <UserCheckIcon sx={{ fontSize: '0.9rem' }} />
          Provided by {service.provider || 'Theni Travels'}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
            <ClockIcon sx={{ fontSize: '1rem', color: 'primary.main' }} />
            <Typography variant="caption" fontWeight={600}>
              {service.duration || 'Full Day'}
            </Typography>
          </Box>
          <Button size="small" sx={{ fontWeight: 700 }} onClick={handleBookNow}>
            Book Now
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PackageCard;

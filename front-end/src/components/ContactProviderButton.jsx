import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const sanitizePhone = (phone) => {
  if (!phone) return '';
  return String(phone).replace(/[^0-9]/g, '');
};

const ContactProviderButton = ({
  providerPhone,
  placeName,
  packageTitle,
  vehicleType,
}) => {
  const [travelDate, setTravelDate] = useState('');
  const [people, setPeople] = useState(1);

  const handleContact = () => {
    const phone = sanitizePhone(providerPhone);

    if (!phone) {
      alert('Provider phone number is not available for this package.');
      return;
    }

    if (!travelDate || !people) {
      alert('Please select a travel date and number of people.');
      return;
    }

    const message = `
Hello, I found your trip on Theni Tourism website.

Place: ${placeName || 'Theni'}
Package: ${packageTitle || 'Transport Package'}
Vehicle: ${vehicleType || 'Private Transport'}
Date: ${new Date(travelDate).toLocaleDateString()}
People: ${people}

Please confirm availability.
`.trim();

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Box
      className="booking-card"
      sx={{
        mt: 2,
        p: 2,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Stack spacing={1.5}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          Plan your trip
        </Typography>
        <Stack direction="row" spacing={1.5}>
          <TextField
            label="Travel date"
            type="date"
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
          <TextField
            label="People"
            type="number"
            size="small"
            inputProps={{ min: 1 }}
            sx={{ maxWidth: 120 }}
            value={people}
            onChange={(e) => {
              const value = Number(e.target.value) || 1;
              setPeople(value < 1 ? 1 : value);
            }}
          />
        </Stack>
        <Button
          variant="contained"
          color="success"
          startIcon={<WhatsAppIcon />}
          fullWidth
          onClick={handleContact}
          sx={{ mt: 1, textTransform: 'none', fontWeight: 700 }}
        >
          Contact via WhatsApp
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactProviderButton;


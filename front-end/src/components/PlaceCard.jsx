import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import { LocationOn as MapPinIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const PlaceCard = ({ place }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={place.image || `https://images.unsplash.com/photo-1542332213-31f8734895fc?auto=format&fit=crop&q=60&w=800`}
          alt={place.name}
          sx={{ transition: 'transform 0.5s ease', '&:hover': { transform: 'scale(1.1)' } }}
        />
        <Chip
          label="Popular"
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(4px)',
            fontWeight: 700,
            color: 'primary.main',
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'primary.main' }}>
          <MapPinIcon sx={{ fontSize: 14, mr: 0.5 }} />
          <Typography variant="caption" fontWeight={600}>
            {place.location || 'Theni District'}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 800 }}>
          {place.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: 1.6,
        }}>
          {place.description || 'Explore the majestic beauty and scenic landscapes of this amazing destination in Theni.'}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 3, pt: 0, justifyContent: 'space-between' }}>
        <Typography 
          variant="button" 
          component={RouterLink} 
          to={`/places/${place.slug}`}
          sx={{ 
            color: 'primary.main', 
            textDecoration: 'none', 
            fontWeight: 700,
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          Explore Details
        </Typography>
        <IconButton 
          component={RouterLink} 
          to={`/places/${place.slug}`}
          sx={{ 
            bgcolor: 'primary.main', 
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' },
            width: 32,
            height: 32
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PlaceCard;

import React, { useState } from 'react';
import { APIProvider, Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';
import { useGetPlacesQuery } from '../services/placesApi';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
  Button,
  Alert,
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon, InfoOutlined as InfoIcon, LocationOn as MapPinIcon, Navigation as NavigationIcon } from '@mui/icons-material';
import Loader from '../components/Loader';

const MapExplorerPage = () => {
  const { data: places, isLoading, error } = useGetPlacesQuery();
  const [selectedPlace, setSelectedPlace] = useState(null);

  const center = { lat: 10.0104, lng: 77.4768 };

  if (isLoading) return <Loader fullScreen />;

  return (
    <Box sx={{ height: 'calc(100vh - 72px)', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {/* Sidebar List */}
      <Paper
        square
        sx={{
          width: { xs: '100%', md: 360 },
          height: { xs: '30vh', md: '100%' },
          overflowY: 'auto',
          borderRight: '1px solid',
          borderColor: 'divider',
          zIndex: 1,
        }}
      >
        <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h5" fontWeight={800}>Map Explorer</Typography>
          <Typography variant="body2" color="text.secondary">Discover destinations across Theni</Typography>
        </Box>
        <List disablePadding>
          {places?.map((place) => (
            <React.Fragment key={place.id}>
              <ListItem disablePadding>
                <ListItemButton 
                  onClick={() => setSelectedPlace(place)}
                  selected={selectedPlace?.id === place.id}
                  sx={{ 
                    p: 2,
                    '&.Mui-selected': { bgcolor: 'primary.light', opacity: 0.1, borderLeft: '4px solid', borderColor: 'primary.main' }
                  }}
                >
                  <ListItemText
                    primary={place.name}
                    secondary={place.description}
                    primaryTypographyProps={{ fontWeight: 700 }}
                    secondaryTypographyProps={{ noWrap: true, fontSize: '0.75rem' }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Map Area */}
      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
          <Map
            defaultCenter={center}
            defaultZoom={10}
            gestureHandling={'greedy'}
            disableDefaultUI={false}
          >
            {places?.map((place) => {
              const [lat, lng] = (place.coordinates || "10.01,77.47").split(',').map(Number);
              return (
                <Marker
                  key={place.id}
                  position={{ lat, lng }}
                  onClick={() => setSelectedPlace(place)}
                />
              );
            })}

            {selectedPlace && (
              <InfoWindow
                position={() => {
                  const [lat, lng] = (selectedPlace.coordinates || "10.01,77.47").split(',').map(Number);
                  return { lat, lng };
                }}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <Box sx={{ p: 1, maxWidth: 200 }}>
                  <Typography variant="subtitle2" fontWeight={700}>{selectedPlace.name}</Typography>
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5, mb: 1.5 }}>
                    {selectedPlace.description}
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    component={RouterLink}
                    to={`/places/${selectedPlace.slug}`}
                  >
                    View Details
                  </Button>
                </Box>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
        
        {!import.meta.env.VITE_GOOGLE_MAPS_API_KEY && (
          <Box sx={{ position: 'absolute', top: 16, left: 16, right: 16, zIndex: 10 }}>
             <Alert severity="warning" icon={<InfoIcon />} sx={{ borderRadius: 3, boxShadow: 3 }}>
              Google Maps API key is not configured.
            </Alert>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MapExplorerPage;

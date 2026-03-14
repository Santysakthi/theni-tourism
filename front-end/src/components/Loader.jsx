import React from 'react';
import { Box, CircularProgress, Backdrop } from '@mui/material';

const Loader = ({ fullScreen = false }) => {
  if (fullScreen) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'rgba(255, 255, 255, 0.8)' }}
        open={true}
      >
        <CircularProgress color="primary" size={60} thickness={4} />
      </Backdrop>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8 }}>
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;

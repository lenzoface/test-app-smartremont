import React from 'react';
import { Typography, Box, Grid2 } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const GalleryDesktop = ({ complex }) => {
  return (
    <Box>
      <Typography variant="h4">{complex.name}</Typography>
      <Typography variant="subtitle1">{complex.address}</Typography>
      <Typography variant="body2">{complex.description}</Typography>
      <Grid2 container spacing={2} style={{ marginTop: '16px' }}>
        {/* Слайдер картинок ЖК */}
        <Grid2 item xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <ArrowBackIosIcon />
            <img src={complex.images[0]} alt={complex.name} style={{ width: '90%', borderRadius: '8px' }} />
            <ArrowForwardIosIcon />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default GalleryDesktop;

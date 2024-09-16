import React from 'react';
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { Typography, Box } from '@mui/material';

const GalleryMobile = ({ complex }) => {
  return (
    <Box>
      <Typography variant="h5">{complex.name}</Typography>
      <Typography variant="subtitle2">{complex.address}</Typography>
      <Typography variant="body2">{complex.description}</Typography>
      <SwipeableViews enableMouseEvents>
        {complex.images.map((image, index) => (
          <Box key={index} p={2}>
            <img src={image} alt={`complex-${index}`} style={{ width: '100%', borderRadius: '8px' }} />
          </Box>
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default GalleryMobile;

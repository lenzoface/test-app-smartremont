import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
// import SwipeableViews from "react-swipeable-views-react-18-fix";

// import { useSwipeable } from 'react-swipeable'; // For swipe gestures

function ComplexDetail({ complexes }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === complexes.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? complexes.images.length - 1 : prevIndex - 1
    );
  };

  // const swipeHandlers = useSwipeable({
  //   onSwipedLeft: handleNextImage,
  //   onSwipedRight: handlePrevImage,
  //   preventDefaultTouchmoveEvent: true,
  //   trackMouse: true,
  // });

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Grid container spacing={2}>
        {/* Row 1: Images */}
        <Grid item size={12}>
        
          <Box            
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              overflow: 'hidden',
            }}
          >
            {/* <SwipeableViews> */}
            <img
              src={complexes.images[currentImageIndex]}
              alt={complexes.name}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
            {/* </SwipeableViews> */}
            <Button
              onClick={handlePrevImage}
              style={{
                position: 'absolute',
                left: '10px',
                bottom: '10px',
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              Prev
            </Button>
            <Button
              onClick={handleNextImage}
              style={{
                position: 'absolute',
                right: '10px',
                bottom: '10px',
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              Next
            </Button>
          </Box>
        </Grid>

        {/* Row 2: Name, Address, and Image Counter */}
        <Grid item size={10} md={10}>
          <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
            {complexes.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {complexes.address}
          </Typography>
        </Grid>
        <Grid item size={2} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography style={{ alignItems: 'right', justifyContent: 'right' }}>
            {currentImageIndex + 1}/{complexes.images.length}
          </Typography>
        </Grid>

        {/* Row 3: Description */}
        <Grid item size={12} md={10}>
          <Typography variant="body1">
            {complexes.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  </ThemeProvider>
  );
}

export default ComplexDetail;

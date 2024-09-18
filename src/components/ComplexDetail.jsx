import React, { useState } from 'react';
import { ThemeProvider, Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import theme from '../styles/theme';
// import SwipeableViews from "react-swipeable-views-react-18-fix";

// import { useSwipeable } from 'react-swipeable'; // For swipe gestures

function ComplexDetail({ complexes }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

// Handle image navigation
const handlePrevImage = () => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex > 0 ? prevIndex - 1 : complexes.images.length - 1
  );
};

const handleNextImage = () => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex < complexes.images.length - 1 ? prevIndex + 1 : 0
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
                right: '75px',
                bottom: '10px',
                color: '#fff',
                backgroundColor: 'red',
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
                backgroundColor: 'red',
              }}
            >
              Next
            </Button>
          </Box>
        </Grid>

        {/* Row 2: Name, Address, and Image Counter */}
        <Grid item size={10} md={10}>
          <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }} display="inline">
            {complexes.name} – 
          </Typography>
          <Typography variant="h5" color="textSecondary" display="inline">
          &nbsp;{complexes.address}
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

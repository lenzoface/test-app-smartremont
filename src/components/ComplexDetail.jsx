import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
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
    <div>
      <Grid container spacing={2}>
        {/* Row 1: Images */}
        <Grid item xs={12}>
        
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
                borderRadius: '8px',
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
            <Typography
              style={{
                position: 'absolute',
                right: '10px',
                bottom: '10px',
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px',
                borderRadius: '4px',
              }}
            >
              {currentImageIndex + 1}/{complexes.images.length}
            </Typography>
          </Box>
        </Grid>

        {/* Row 2: Name, Address, and Image Counter */}
        <Grid item xs={12} md={10}>
          <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
            {complexes.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {complexes.address}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>
            {currentImageIndex + 1}/{complexes.images.length}
          </Typography>
        </Grid>

        {/* Row 3: Description */}
        <Grid item xs={12} md={10}>
          <Typography variant="body1">
            {complexes.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ComplexDetail;

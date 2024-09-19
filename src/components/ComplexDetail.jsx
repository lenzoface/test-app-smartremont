import React, { useState } from "react";
import { ThemeProvider, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import theme from "../styles/theme";
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
              sx={{
                // Aspect ratio container
                position: "relative",
                width: '100%',
                // Set different aspect ratios using padding-top for responsive design
                paddingTop: {
                  xs: "100%", // Square aspect ratio on mobile (1:1)
                  sm: "75%", // More rectangular on small screens (4:3)
                  md: "50%", // 19:6 aspect ratio on medium and larger screens
                },
                overflow: "hidden",
              }}
            >
              {/* <SwipeableViews> */}
              <img
                src={complexes.images[currentImageIndex]}
                alt={complexes.name}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  minWidth: "100%", // Ensure the image scales up if it's too small
                  minHeight: "100%", // Ensure the image scales up if it's too small
                  objectFit: "cover", // Maintain the aspect ratio of the image itself
                }}
              />
              {/* </SwipeableViews> */}
              <Button
                onClick={handlePrevImage}
                style={{
                  position: "absolute",
                  right: "75px",
                  bottom: "10px",
                  color: "#fff",
                  backgroundColor: "red",
                }}
              >
                Prev
              </Button>
              <Button
                onClick={handleNextImage}
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                  color: "#fff",
                  backgroundColor: "red",
                }}
              >
                Next
              </Button>
            </Box>
          </Grid>

          {/* Row 2: Name, Address, and Image Counter */}
          <Grid item size={10}>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: "bold" }}
              display="inline"
            >
              {complexes.name} –
            </Typography>
            <Typography variant="h5" color="textSecondary" display="inline">
              &nbsp;{complexes.address}
            </Typography>
          </Grid>
          <Grid
            item
            size={2}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              style={{ alignItems: "right", justifyContent: "right" }}
            >
              {currentImageIndex + 1}/{complexes.images.length}
            </Typography>
          </Grid>

          {/* Row 3: Description */}
          <Grid item size={12} md={10}>
            <Typography variant="body1">{complexes.description}</Typography>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default ComplexDetail;

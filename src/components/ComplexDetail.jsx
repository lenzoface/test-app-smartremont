import React, { useState } from "react";
import { ThemeProvider, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import theme from "../styles/theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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
                width: "100%",
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
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  display: "flex",
                  gap: "0", // No space between buttons
                }}
              >
                <Button
                  onClick={handlePrevImage}
                  sx={{
                    padding: '1rem',
                    color: "#fff",
                    backgroundColor: "#D32F2F",
                    "&:hover": {
                      backgroundColor: "#c62828", // Darker red on hover
                    },
                  }}
                >
                  <ArrowBackIosNewIcon /> {/* Use symbol for left arrow */}
                </Button>
                <Button
                  onClick={handleNextImage}
                  sx={{
                    color: "#fff",
                    backgroundColor: "#D32F2F",
                    "&:hover": {
                      backgroundColor: "#c62828", // Darker red on hover
                    },
                  }}
                >
                  <ArrowForwardIosIcon /> {/* Use symbol for right arrow */}
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Row 2: Name, Address, and Image Counter */}
          <Grid item size={10}>
            <Typography
              variant="h6"
              component="div"
              style={{ fontWeight: "600" }}
              display="inline"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                color: "#00004B",
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="2.5" fill="%23D32F2F" /></svg>')`,
                  backgroundSize: 'cover',
                  marginRight: '10px', // Adjust spacing between dot and text
                }
              }}
            >
              {complexes.name} –
            </Typography>
            <Typography variant="h6" color="textSecondary" display="inline">
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
              sx={{color: "#00004B"}}
            >
              <b>{currentImageIndex + 1}</b>/{complexes.images.length}
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

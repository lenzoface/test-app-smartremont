import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Select,
  MenuItem,
  useMediaQuery,
  Box
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import complexesData from "./data/projects.json"; // JSON со списком ЖК
import ComplexDetail from "./components/ComplexDetail"; // Import the detailed component
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import CustomButton from "./components/CustomButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const App = () => {
  // Extract the first type and the first item within that type as default
  const defaultType = Object.keys(complexesData[0].type)[0]; // First type key
  const defaultComplex = complexesData[0].type[defaultType][0]; // First complex of the first type

  const [selectedType, setSelectedType] = useState(defaultType);
  const [selectedComplex, setSelectedComplex] = useState(defaultComplex);

  // Handle selection change for type
  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    setSelectedComplex(complexesData[0].type[newType][0]); // Reset selected complex when type changes
  };

  // Get the list of complexes for the selected type
  const complexList = complexesData[0].type[selectedType];

  const rightGridRef = useRef(null);
  const [rightGridHeight, setRightGridHeight] = useState(0);

  useEffect(() => {
    const updateRightGridHeight = () => {
      if (rightGridRef.current) {
        setRightGridHeight(rightGridRef.current.offsetHeight);
      }
    };

    // Initial height calculation
    updateRightGridHeight();
  }, []);

  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ my: 4 }}>
        {/* First row - Full width, text aligned left */}
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{ fontWeight: 700, mb: 2 }}
              variant="h3"
              color="primary"
              align="left"
              gutterBottom
            >
              Галерея проектов
            </Typography>
          </Grid>
        </Grid>

        {/* Second row */}
        <Grid container spacing={2} mb={6}>
          {/* First full-width section (Text and button) */}
          <Grid
            item
            size={{ xs: 12, md: 3 }}
            mb={3}
            sx={{ display: isMdScreen ? "flex" : "block" }}
            flexDirection="column"
          >
            <Typography
              variant="body1"
              align="left"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Сумма экономии рассчитана в сравнении с суммой цен этого же
              перечня товаров по отдельности
            </Typography>
            <CustomButton>ВЫБРАТЬ ДИЗАЙН</CustomButton>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ mb: 6 }}></Grid>
          {/* Second full-width section (Centered text) */}
          <Grid
            item
            size={{ xs: 12, md: 5 }}
            pt={{ xs: 0, md: 8 }}
            pl={{ xs: 0, md: 6 }}
            pr={{ xs: 6, md: 0 }}
            align={{ xs: "left", md: "center" }}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
              "::before": {
                content: '""',
                position: "absolute",
                top: { xs: "-40px", md: "30px" }, // Position adjustment
                left: { xs: "0px", md: "-10px" }, // Position adjustment
                width: { xs: "800px", md: "400px" }, // Width enough to fit 20 dots horizontally
                height: { xs: "40px", md: "100px" }, // Height enough to fit 5 dots vertically
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="1" fill="%23D32F2F" /></svg>')`,
                backgroundRepeat: "repeat",
                backgroundSize: { xs: "20px 20px", md: "20px 20px" }, // Maintain 10px size for desktop
                zIndex: -1, // Dots behind the text
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff", // Add white background behind the text
                display: "inline-block", // Make sure background wraps only around the text
                padding: "4px", // Add a small padding around the text to separate it from the dots
              }}
            >
            <Typography
              variant="h4"
              color="primary"
              sx={{ lineHeight: 1.5, fontWeight: 400 }}
            >
              Мы успешно завершили уже{" "}
              <span style={{ color: "#D32F2F" }}>более 450</span> ремонтов
            </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Third row */}
        <Grid container spacing={2} sx={{ display: "flex" }}>
          <Grid size={{ xs: 12, md: 3 }}>
            {/* Dropdown for selecting the type */}
            <Grid item md={4} mb={2}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", mb: 1, letterSpacing: "1px" }}
                color="primary"
              >
                ТИП РЕМОНТА
              </Typography>
              <Select
                value={selectedType}
                onChange={handleTypeChange}
                fullWidth
                variant="outlined"
                sx={{ "& .MuiSvgIcon-root": { color: "#D32F2F" } }}
                IconComponent={ExpandMoreIcon}
              >
                {Object.keys(complexesData[0].type).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Render buttons for complexes based on the selected type */}
            <Grid
              item
              sx={{
                overflowY: "auto",
                maxHeight: rightGridHeight, // Set max height based on right component
                // border: "1px solid #ddd", // Optional: add a border for visibility
              }}
            >
              {isMdScreen ? (
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "600", mb: 1 }}
                  color="primary"
                >
                  СДЕЛАННЫЕ РЕМОНТЫ
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  fontWeight="light"
                  color="textSecondary"
                  mb={1}
                >
                  Найдено {complexList.length} обьектов:
                </Typography>
              )}

              <Grid container spacing={1} direction="column">
                {isMdScreen ? (
                  <Grid item xs={12}>
                    <Select
                      variant="outlined"
                      fullWidth
                      value={selectedComplex?.id || ""}
                      onChange={(e) => {
                        const selectedId = e.target.value;
                        const complex = complexList.find(
                          (c) => c.id === selectedId
                        );
                        setSelectedComplex(complex);
                      }}
                      sx={{ "& .MuiSvgIcon-root": { color: "#D32F2F" } }}
                      IconComponent={ExpandMoreIcon}
                    >
                      {complexList.map((complex) => (
                        <MenuItem key={complex.id} value={complex.id}>
                          {complex.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                ) : (
                  complexList.map((complex) => (
                    <Grid item key={complex.id}>
                      <Button
                        variant={
                          selectedComplex?.id === complex.id
                            ? "contained"
                            : "outlined"
                        }
                        color="primary"
                        sx={{
                          paddingY: "0.7em",
                          backgroundColor:
                            selectedComplex?.id === complex.id
                              ? "contained" // No background for selected button
                              : "#eaedf4", // Background color for unselected buttons
                        }}
                        onClick={() => setSelectedComplex(complex)}
                      >
                        {complex.name}
                      </Button>
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>

          {/* Render ComplexDetail if a complex is selected */}
          {selectedComplex && (
            <Grid
              container
              size={{ xs: 12, md: 9 }}
              spacing={2}
              mt={4}
              ref={rightGridRef}
              sx={{
                flexShrink: 0, // Prevent shrinking
                // border: "1px solid #ddd", // Optional: add a border for visibility
              }}
            >
              <Grid item>
                <ComplexDetail complexes={selectedComplex} />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;

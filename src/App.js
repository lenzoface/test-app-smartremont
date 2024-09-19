import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import complexesData from "./data/projects.json"; // JSON со списком ЖК
import ComplexDetail from "./components/ComplexDetail"; // Import the detailed component
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import CustomButton from "./components/CustomButton";

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
    // Update the height of the right grid
    if (rightGridRef.current) {
      setRightGridHeight(rightGridRef.current.offsetHeight);
    }
  }, [selectedComplex]); // Update height when selected complex changes

  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{my: 4}}>
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
          <Grid item size={{ xs: 12, md: 3 }} mb={3} display="flex" flexDirection="column" justifyContent="center">
            <Typography
              variant="body1"
              align="left"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Сумма экономии рассчитана в сравнении с суммой цен этого же
              перечня товаров по отдельности
            </Typography>
            <CustomButton mb={3}>ВЫБРАТЬ ДИЗАЙН</CustomButton>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}></Grid>
          {/* Second full-width section (Centered text) */}
          <Grid
            item
            size={{ xs: 12, md: 5 }}
            pt={{ xs: 0, md: 8 }}
            pl={{ xs: 0, md: 6 }}
            pr={{xs: 6, md: 0}}            
            align={{xs: 'left', md: 'center'}}
          >
            <Typography
              variant="h4"
              color="primary"
              sx={{ lineHeight: 1.5, fontWeight: 500 }}
            >
              Мы успешно завершили уже{" "}
              <span style={{ color: "#D32F2F" }}>более 450</span> ремонтов
            </Typography>
          </Grid>
        </Grid>

        {/* Third row */}
        <Grid container spacing={2} sx={{ display: "flex" }}>
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              overflowY: "auto",
              maxHeight: rightGridHeight, // Set max height based on right component
              // border: "1px solid #ddd", // Optional: add a border for visibility
            }}
          >
            {/* Dropdown for selecting the type */}
            <Grid item md={4} mb={2}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", mb: 1 }}
                color="primary"
              >
                ТИП РЕМОНТА
              </Typography>
              <Select
                value={selectedType}
                onChange={handleTypeChange}
                fullWidth
                variant="outlined"
              >
                {Object.keys(complexesData[0].type).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Render buttons for complexes based on the selected type */}
            <Grid item>
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

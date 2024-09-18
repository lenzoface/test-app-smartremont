import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import complexes from "./data/projects.json"; // JSON со списком ЖК
import ComplexDetail from "./components/ComplexDetail"; // Import the detailed component
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import theme from "./styles/theme";
import { blue } from "@mui/material/colors";
import CustomButton from "./components/CustomButton"

const App = () => {
  const [selectedComplex, setSelectedComplex] = useState(complexes[0]);

  const handleSelectComplex = (complexes) => {
    setSelectedComplex(complexes);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* First row - Full width, text aligned left */}
        <Grid container spacing={2}>
          <Grid item size={3}>
            <Typography
              sx={{ fontWeight: 800, mb: 3, color: blue[900] }}
              variant="h3"
              align="left"
              gutterBottom
            >
              Галерея проектов
            </Typography>
          </Grid>
        </Grid>

        {/* Second row */}
        <Grid container spacing={2} mb={4}>
          {/* First full-width section (Text and button) */}
          <Grid item size={3} md={6} mb={3}>
            <Typography
              variant="body1"
              align="left"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Сумма экономии рассчитана в сравнении с суммой цен этого же
              перечня товаров по отдельности
            </Typography>
            <CustomButton>
              ВЫБРАТЬ ДИЗАЙН
            </CustomButton>
          </Grid>
          <Grid size={3}></Grid>
          {/* Second full-width section (Centered text) */}
          <Grid item size={5} md={6} pt={8} pl={6}>
            <Typography
              variant="h4"
              align="center"
              color="primary"
              sx={{ lineHeight: 1.5, fontWeight: 500 }}
            >
              Мы успешно завершили уже{" "}
              <span style={{ color: "#D32F2F" }}>более 450</span> ремонтов
            </Typography>
          </Grid>
        </Grid>

        {/* Third row */}
        <Grid container spacing={2}>
          {/* Render buttons for complexes */}
          <Grid item size={2}>
            {complexes.map((complexes) => (
              <Button
                key={complexes.id}
                variant={
                  complexes.id === selectedComplex?.id
                    ? "contained"
                    : "outlined"
                }
                color="primary" // Ensure buttons use the red color from the theme
                onClick={() => handleSelectComplex(complexes)}
                style={{ margin: "5px" }}
              >
                {complexes.name}
              </Button>
            ))}
          </Grid>
          {/* Render ComplexDetail if a complex is selected */}
          {selectedComplex && (
            <Grid item size={10}>
              <ComplexDetail complexes={selectedComplex} />
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;

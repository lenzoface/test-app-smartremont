import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import complexes from './data/projects.json'; // JSON со списком ЖК
import ComplexDetail from './components/ComplexDetail'; // Import the detailed component
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

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
          <Grid item xs={12}>
            <Typography variant="h4" align="left" gutterBottom>
              Full width text, aligned left
            </Typography>
          </Grid>
        </Grid>

        {/* Second row */}
        <Grid container spacing={2}>
          {/* First full-width section (Text and button) */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" align="left" gutterBottom>
              Left-aligned text for button
            </Typography>
            <Button variant="contained" color="primary">
              Action Button
            </Button>
          </Grid>

          {/* Second full-width section (Centered text) */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" align="center" gutterBottom>
              Center-aligned text for mobile and desktop
            </Typography>
          </Grid>
        </Grid>

        {/* Third row */}
        <Grid container spacing={2}>
        {/* Render buttons for complexes */}
        <Grid item xs={12}>
          {complexes.map((complexes) => (
            <Button
              key={complexes.id}
              variant={complexes.id === selectedComplex?.id ? 'contained' : 'outlined'}
              color="primary" // Ensure buttons use the red color from the theme
              onClick={() => handleSelectComplex(complexes)}
              style={{ margin: '5px' }}
            >
              {complexes.name}
            </Button>
          ))}
        </Grid>

        {/* Render ComplexDetail if a complex is selected */}
        {selectedComplex && (
          <Grid item xs={12}>
            <ComplexDetail complexes={selectedComplex} />
          </Grid>
        )}

      </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { Container, Grid2, Typography, Button, Box, useMediaQuery } from '@mui/material';
import complexes from './data/projects.json'; // JSON со списком ЖК
import GalleryDesktop from './components/GalleryDesktop';
import GalleryMobile from './components/GalleryMobile';

const App = () => {
  const [selectedComplex, setSelectedComplex] = useState(complexes[0]);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleSelectComplex = (complex) => {
    setSelectedComplex(complex);
  };

  return (
    <Container>
      <Grid2 container spacing={2}>
        {/* Левый список ЖК */}
        <Grid2 item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Тип ремонта</Typography>
          <Box display="flex" flexDirection="column">
            {complexes.map((complex) => (
              <Button
                key={complex.id}
                variant={complex.id === selectedComplex.id ? 'contained' : 'outlined'}
                onClick={() => handleSelectComplex(complex)}
                style={{ marginBottom: '8px' }}
              >
                {complex.name}
              </Button>
            ))}
          </Box>
        </Grid2>

        {/* Правая часть галереи */}
        <Grid2 item xs={12} md={9}>
          {isMobile ? (
            <GalleryMobile complex={selectedComplex} />
          ) : (
            <GalleryDesktop complex={selectedComplex} />
          )}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default App;

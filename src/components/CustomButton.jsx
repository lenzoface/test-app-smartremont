import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  border: '2px solid #D32F2F', // Red border
  color: '#D32F2F',             // Red text
  fontWeight: 'bold',           // Bold text
  borderRadius: '0',
  letterSpacing: '1px',  // Increase letter spacing
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(211, 47, 47, 0.1)', // Slight red hover effect
    borderColor: '#D32F2F',
  },
});

const CustomButton = () => {
  return (
    <StyledButton variant="outlined">
      ВЫБРАТЬ ДИЗАЙН
    </StyledButton>
  );
};

export default CustomButton;

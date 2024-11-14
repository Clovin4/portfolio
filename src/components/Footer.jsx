import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        bgcolor: 'primary.main',
        color: 'white',
        mt: 'auto',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} My Portfolio |{' '}
        <Link href="https://github.com/yourusername" color="inherit" target="_blank" rel="noopener">
          GitHub
        </Link>{' '}
        |{' '}
        <Link href="https://linkedin.com/in/yourusername" color="inherit" target="_blank" rel="noopener">
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Header = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme(); // Access the current theme

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.default, // Use theme's background color
        color: theme.palette.text.primary, // Use theme's primary text color
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Christian Loving
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/resume">Resume</Button>
            <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
            <IconButton color="inherit" onClick={toggleTheme}>
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

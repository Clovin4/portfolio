import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ASCII_ART } from './asciiArt';

const AsciiHeader = ({ title }) => {
  const theme = useTheme();
  const asciiText = ASCII_ART[title];

  if (!asciiText) {
    console.warn(`No ASCII art found for title: ${title}`);
    return null;
  }

  return (
    <Box
      component="header"
      sx={{
        mb: 4,
        overflow: 'hidden',
      }}
    >
      {/* Screen reader accessible title */}
      <Box
        component="h1"
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {title}
      </Box>

      {/* ASCII art visual */}
      <Box
        component="pre"
        aria-hidden="true"
        sx={{
          fontFamily: 'monospace',
          fontSize: 'clamp(0.4rem, 2vw, 1rem)',
          lineHeight: 1.2,
          color: theme.palette.text.primary,
          margin: 0,
          whiteSpace: 'pre',
          overflowX: 'auto',
        }}
      >
        {asciiText}
      </Box>
    </Box>
  );
};

export default AsciiHeader;

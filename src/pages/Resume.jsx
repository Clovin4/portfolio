import React from 'react';
import { Container, Box } from '@mui/material';
import AsciiHeader from '../components/ascii/AsciiHeader';
import MarkdownRenderer from '../components/markdown/MarkdownRenderer';
import resumeContent from '../content/resume.md?raw';

const Resume = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 4 }}>
        <AsciiHeader title="Resume" />
        <MarkdownRenderer content={resumeContent} />
      </Box>
    </Container>
  );
};

export default Resume;

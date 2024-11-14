import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        About Me 👋
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1" paragraph>
          Hello! I'm Christian Loving, a passionate software engineer and data scientist with a love for solving complex problems.
          My expertise spans across machine learning, quantitative finance, and full-stack development.
        </Typography>
        <Typography variant="body1" paragraph>
          Over the years, I've worked on projects ranging from financial modeling platforms to CI/CD automation workflows. 
          My goal is to combine technology and creativity to build innovative solutions that make a positive impact.
        </Typography>
        <Typography variant="body1" paragraph>
          When I'm not coding, you can find me exploring new technologies, writing research papers on quantitative finance, or contributing to open-source projects.
        </Typography>
        <Typography variant="body1" paragraph>
          If you'd like to collaborate or learn more about my work, feel free to reach out through the <strong>Contact</strong> page or connect with me on LinkedIn.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

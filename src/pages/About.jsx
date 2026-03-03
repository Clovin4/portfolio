import React from 'react';
import { Container, Typography, Box, Chip, Stack } from '@mui/material';
import AsciiHeader from '../components/ascii/AsciiHeader';

const About = () => {
  const skills = [
    'Python',
    'AWS',
    'Airflow',
    'Docker',
    "Kubernetes",
    'Terraform',
    'Ansible',
    'PostgreSQL',
    'Grafana',
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <AsciiHeader title="About" />
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1" paragraph>
          I'm a Software Engineer at Xylem, where I design and build data infrastructure
          that powers IoT analytics and ML workflows. My work spans auto-scaling ETL architectures,
          real-time sensor data pipelines, and production ML deployments.
        </Typography>
        <Typography variant="body1" paragraph>
          I'm passionate about building systems that just work—reliable data pipelines,
          clean abstractions, and tooling that makes teams more productive. I've reduced
          pipeline failures by 75%, cut development time from days to hours with custom SDKs,
          and deployed ML models that actively prevent infrastructure failures.
        </Typography>
        <Typography variant="body1" paragraph>
          Before Xylem, I worked as a Water Resource Engineer at C.H. Fenstermaker, where I
          discovered my love for automation by building ETL pipelines that replaced manual
          data workflows. That experience led me to pivot fully into software engineering.
        </Typography>
        <Typography variant="body1" paragraph>
          I hold a Master's in Engineering from the University of New Orleans and a Bachelor's
          from LSU. I'm also an AWS Certified Solutions Architect.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'monospace' }}>
            Tech I work with:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                size="small"
                sx={{ fontFamily: 'monospace' }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

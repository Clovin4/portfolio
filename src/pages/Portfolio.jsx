import React from 'react';
import { Container, Grid, Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { Build, BarChart, School, Code, ShowChart, BubbleChart, Timeline } from '@mui/icons-material';

const projects = [
  {
    title: 'Quantstream',
    description: 'A financial data analysis tool built with an Xarray data structure.',
    icon: <BarChart />,
    link: 'https://clovin4.github.io/quantstream/'
  },
  {
    title: 'Prefect Deployment on VPS (Digital Ocean)',
    description: `
      A docker compose deployment with reverse proxy and watchtower. Watchtower is used to update the containers automatically 
      when a new image is available. The reverse proxy is used to route the requests to the correct container based on the domain name.
    `,
    icon: <BubbleChart />,
    link: 'https://github.com/Clovin4/qv-prefect-server'
  },
  {
    title: 'Machine Learning',
    description: 'Using random forest models to predict stock prices.',
    icon: <ShowChart />,
    link: ''
  },
  {
    title: 'Quantitative Finance Research',
    description: 'Short research papers on portfolio optimization and risk management.',
    icon: <School />,
    link: 'https://clovin4.github.io/research/'
  },
  {
    title: 'CI/CD with GitHub Actions',
    description: 'CI/CD workflows with GitHub Actions.',
    icon: <Build />,
    link: ['https://github.com/Clovin4/quantstream/tree/main/.github', 'https://github.com/Clovin4/qv-terraform/tree/main/.github/workflows'] // An example with two links; update the URLs as needed.
  },
  {
    title: 'Docker for Data Science',
    description: 'Tutorial for using Docker in data science projects.',
    icon: <Code />,
    link: ''
  },
  {
    title: 'Data Visualization with Plotly and Holoviews',
    description: 'Examples for creating interactive data visualizations.',
    icon: <BarChart />,
    link: ''
  },
  {
    title: 'LSTM for Time Series Forecasting',
    description: 'Using LSTM neural networks for time series forecasting.',
    icon: <Timeline />,
    link: ''
  },
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Portfolio 📔
      </Typography>
      <Typography variant="body1" paragraph textAlign="center">
        Warning ⚠️: Some projects (and this page for that matter) are still in development. Stay tuned for updates!
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  {project.icon}
                  <Typography variant="h5">{project.title}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                {Array.isArray(project.link) && project.link.length > 0 ? (
                  project.link.map((url, i) => (
                    url && (
                      <Button
                        key={i}
                        size="small"
                        color={i === 0 ? "primary" : "secondary"}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {i === 0 ? "Learn More" : "Learn More (but even more!)"}
                      </Button>
                    )
                  ))
                ) : project.link ? (
                  <Button
                    size="small"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                ) : null}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;

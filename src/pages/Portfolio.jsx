import React from 'react';
import { Container, Grid, Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { Build, BarChart, School, Work, Code, ShowChart, BubbleChart, Timeline } from '@mui/icons-material';

const projects = [
  {
    title: 'Quantstream',
    description: 'A financial data analysis tool built with an Xarray data structure.',
    icon: <BarChart />,
  },
  {
    title: 'Fraud Detection Model',
    description: 'A machine learning model to detect fraudulent transactions.',
    icon: <BubbleChart />,
  },
  {
    title: 'Machine Learning for Trading',
    description: 'Using machine learning models to predict stock prices.',
    icon: <ShowChart />,
  },
  {
    title: 'Quantitative Finance Research',
    description: 'Short research papers on portfolio optimization and risk management.',
    icon: <School />,
  },
  {
    title: 'CI/CD with GitHub Actions',
    description: 'Cheat sheet for setting up CI/CD workflows with GitHub Actions.',
    icon: <Build />,
  },
  {
    title: 'Docker for Data Science',
    description: 'Tutorial for using Docker in data science projects.',
    icon: <Code />,
  },
  {
    title: 'Data Visualization with Plotly and Holoviews',
    description: 'Examples for creating interactive data visualizations.',
    icon: <BarChart />,
  },
  {
    title: 'LSTM for Time Series Forecasting',
    description: 'Using LSTM neural networks for time series forecasting.',
    icon: <Timeline />,
  },
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Portfolio 📔
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
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;

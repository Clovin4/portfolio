import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';

const Resume = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h3" gutterBottom>
          Christian Loving
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: (985) 320-3728 | Email: <a href="mailto:Christian70401@gmail.com">Christian70401@gmail.com</a> |{' '}
          <a href="https://www.linkedin.com/in/christian-loving/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
          Experience
        </Typography>
        <Typography variant="h6" gutterBottom>
          Xylem | Remote | September 2023 – Present | Associate Informatics Engineer
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              Developed and maintained data pipelines for machine learning projects, emphasizing data cleaning, validation, and transformation to support reliable predictive modeling.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Assisted with training a neural network for predicting wastewater flow, leveraging deep learning methodologies for enhanced accuracy in real-time applications.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Utilized descriptive analytics to monitor operational metrics, detecting issues such as blockage and sensor drift, contributing to system health and reliability.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Maintained and optimized a Django REST API to support real-time data collection from distributed IoT devices, facilitating efficient monitoring and data processing.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Queried, updated, and maintained databases with a focus on efficient ETL pipeline management, ensuring data integrity for internal and client use.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Deployed and managed services using Docker and AWS ECR/ECS, supporting scalable real-time operations and contributing to CI/CD automation for efficient releases.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Used Plotly and Streamlit to create interactive data visualizations, improving data accessibility and decision-making for stakeholders.
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
          Tools & Technologies
        </Typography>
        <Typography variant="body1">
          <strong>Programming Languages:</strong> Python, Java, JavaScript/TypeScript <br />
          <strong>Data Science & Analytics:</strong> Pandas, NumPy, Polars, scikit-learn, PyTorch, Plotly, Streamlit <br />
          <strong>Machine Learning:</strong> Neural networks, Decision Trees, Logistic Regression <br />
          <strong>Backend & Infrastructure:</strong> Django, FastAPI, Docker, AWS ECR/ECS, Terraform <br />
          <strong>Database Management:</strong> PostgreSQL, MySQL, MongoDB <br />
          <strong>DevOps:</strong> CI/CD pipeline management with GitHub and Bitbucket
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
          Projects
        </Typography>
        <Typography variant="h6" gutterBottom>
          QuantStream | Python Package
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              Developed a data extraction package to retrieve financial data from a third-party API, designed for technical analysis and quantitative modeling.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Structured data using Xarray to enable multi-dimensional financial dataset manipulation, supporting complex financial data analysis.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Integrated CI/CD workflows, including auto-documentation and automated deployments via GitHub Actions.
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              <strong>Georgia Tech | Atlanta, GA</strong> | M.S. in Computer Science (In Progress)
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>University of New Orleans | New Orleans, LA</strong> | M.S. in Engineering
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>Louisiana State University | Baton Rouge, LA</strong> | B.S. in Engineering
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Resume;

import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Hi, 👋 I'm Christian
      </Typography>
      <Typography variant="body1">
        I am datascientist and computer science student at Georgia Tech with a passion for data analysis and visualization.
        I am currently working as an Informatics Enigineer at Xylem Inc. where I am responsible for developing and maintaining
         data pipelines. I have a strong background in Python, SQL, and AWS. I am currenly taking classes in machine learning and data analysis.   
      </Typography>
    </Container>
  );
};

export default Home;

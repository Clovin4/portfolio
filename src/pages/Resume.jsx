import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const Resume = () => (
  <div style={{ padding: '50px' }}>
    <Title level={2}>Christian Loving</Title>
    <Paragraph>Email: Christian70401@gmail.com | LinkedIn: linkedin.com/in/christian-loving</Paragraph>
    
    <Divider />
    
    <Title level={3}>Experience</Title>
    <Paragraph>
      <strong>Xylem | Informatics Engineer</strong><br />
      September 2023 – Present<br />
      Developed and maintained data pipelines for ML projects, maintained a Django REST API for IoT data...
    </Paragraph>
    
    {/* Add more of your resume details here */}
  </div>
);

export default Resume;

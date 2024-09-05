import React from 'react';
import { Layout, Avatar, Typography, Space, Card, Switch, theme, Divider } from 'antd';
import { GithubOutlined, LinkedinOutlined, BulbOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;
import avatarImage from '../assets/profile_pic.jpeg';

const Home = ({ isDarkMode, setIsDarkMode }) => {
    const { token } = theme.useToken();
  return (
    <Layout style={{ 
        minHeight: '100vh', 
        width: '100vw',
        transition: 'all 0.25s'
    }}>
        {/* Header Section */}
        <Header style={{ 
            backgroundColor: token.colorBgContainer,
            color: token.colorText,
            padding: '0 50px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            width: '100%' 
        }}>
            <Space align="center">
                {/* Avatar */}
                <Avatar size="large" src={avatarImage} alt="Christian's Avatar" />
                {/* Name */}
                <Divider type="vertical" style={{ height: '20px', margin: '0 12px' }} />
                <Title level={3} style={{ margin: 0 , color: token.colorPrimary }}>Christian Loving</Title>
            </Space>
            <Space style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <Switch
                    checked={isDarkMode}
                    onChange={() => setIsDarkMode(!isDarkMode)}
                    checkedChildren= {<BulbOutlined />}
                    unCheckedChildren={<BulbOutlined />}
                />
                <Divider type="vertical" style={{ height: '20px', margin: '0 12px' }} />
                {/* GitHub Icon */}
                <a href="https://github.com/Clovin4" target="_blank" rel="noopener noreferrer">
                    <GithubOutlined style={{ fontSize: '24px', color: '#333' }} />
                </a>
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/christian-loving/" target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined style={{ fontSize: '24px', color: '#0077B5' }} />
                </a>
            </Space>
        </Header>
        <Content style={{ padding: '50px', flex: 1, display: 'flex', flexDirection: 'column' , width: '100%'}}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                {/* Experience Section */}
                <Card 
                title={<span style={{ color: token.colorPrimary }}>Experience</span>} 
                bordered={false} style={{ marginBottom: '20px' }}
                >
                    <Paragraph>
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Xylem | Remote | September 2023 – Present | Informatics Engineer</strong><br />
                    • Developed and maintained data pipelines for Machine Learning projects, focusing on data cleaning, validation, and transformation tasks.<br />
                    • Maintained a Django REST API to support real-time data collection from distributed IoT devices, providing a platform for real-time monitoring and data processing.<br />
                    • Queried, updated, and debugged databases, ensuring efficient ETL pipeline management.<br />
                    • Assisted with CI/CD pipelines, deploying services using Docker and AWS ECR/ECS.<br />
                    • Debugged and optimized a Java Servlet, ensuring reliable data ingestion from sensor streams.<br />
                    • Provided proactive production support for API integrations with MySQL databases.<br /><br />

                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>C.H. Fenstermaker | Remote | April 2022 – September 2023 | Engineer Intern</strong><br />
                    • Created ETL scripts to process data from 3rd party APIs.<br /><br />

                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>HNTB Corporation | New Orleans, LA | January 2020 - April 2022 | Engineer II</strong><br />
                    • Leveraged Jupyter notebooks to perform and document hydrologic, hydraulic, and civil design calculations.
                    </Paragraph>
                </Card>

                {/* Tools Section */}
                <Card 
                title={<span style={{ color: token.colorPrimary }}>Tools</span>} 
                bordered={false}
                >
                    <Paragraph>
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Programming Languages:</strong> Python, Java, JavaScript/TypeScript<br />
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Data Engineering & Infrastructure:</strong> Django, Java Servlets, Docker, AWS ECR/ECS<br />
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Data Analysis:</strong> Python (Pandas, NumPy)<br />
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>DevOps Tools:</strong> CI/CD, Docker, AWS, Git, Terraform<br />
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Operating Systems:</strong> Linux (Bash, scripting)<br />
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Networking & Infrastructure:</strong> Platform services, distributed systems, containerization, scalability<br />
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Databases:</strong> PostgreSQL, MySQL
                    </Paragraph>
                </Card>

                {/* Education Section */}
                <Card title={<span style={{ color: token.colorPrimary }}>Education</span>} bordered={false}>
                    <Paragraph>
                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Georgia Tech | Atlanta, GA | January 2024 - Present</strong><br />
                    M.S, Computer Science<br /><br />

                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>University of New Orleans | New Orleans, LA | August 2023</strong><br />
                    M.S, Engineering<br /><br />

                    <strong style={{ color: token.colorPrimary, fontSize: '1.1em' }}>Louisiana State University | Baton Rouge, LA | May 2018</strong><br />
                    B.S, Engineering
                    </Paragraph>
                </Card>

            </div>

        </Content>
    </Layout>
  );
};

export default Home;

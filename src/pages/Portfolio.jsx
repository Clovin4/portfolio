import { useState } from 'react';
import { Container, Box, Typography, useTheme, Chip, Stack } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';

const projects = [
  {
    id: 'quantstream',
    name: 'quantstream',
    description: 'Financial data analysis library built on Xarray. Handles time series data with multi-dimensional indexing for quantitative workflows.',
    tags: ['python', 'xarray', 'finance'],
    github: 'https://github.com/Clovin4/quantstream',
    demo: 'https://clovin4.github.io/quantstream/',
    status: 'active',
  },
  {
    id: 'aperture',
    name: 'aperture',
    description: 'A modern data orchestration platform for building and managing research data.',
    tags: ['go', 'react', 'devops', 'platform-engineering'],
    github: 'https://github.com/Clovin4/qv-prefect-server',
    status: 'active',
  },
  {
    id: 'research',
    name: 'research',
    description: 'Short papers on portfolio optimization, risk management, and quantitative finance topics.',
    tags: ['finance', 'research', 'python'],
    demo: 'https://clovin4.github.io/research/',
    status: 'active',
  },
  {
    id: 'secure-k8s',
    name: 'secure-k8s',
    description: 'A security-focused setup for Kubernetes the Hard Way. Includes VPC isolation, private networking, and hardened configurations.',
    tags: ['kubernetes', 'security', 'devops'],
    github: 'https://github.com/Clovin4/serverTest-do',
    status: 'active',
  },
  {
    id: 'portfolio',
    name: 'portfolio',
    description: 'This site. React + MUI with a terminal aesthetic.',
    tags: ['react', 'vite', 'mui'],
    github: 'https://github.com/Clovin4/portfolio',
    status: 'active',
  }
];

const ProjectCard = ({ project, isSelected, onClick }) => {
  const theme = useTheme();

  return (
    <Box
      onClick={onClick}
      sx={{
        p: 2,
        cursor: 'pointer',
        borderLeft: isSelected ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
        backgroundColor: isSelected
          ? theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'
          : 'transparent',
        '&:hover': {
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
        },
        transition: 'all 0.15s ease',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontFamily: 'monospace' }}>
        <Typography
          component="span"
          sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem' }}
        >
          drwxr-xr-x
        </Typography>
        <Typography
          component="span"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            fontSize: '0.95rem',
          }}
        >
          {project.name}/
        </Typography>
      </Box>
    </Box>
  );
};

const ProjectDetail = ({ project }) => {
  const theme = useTheme();

  if (!project) {
    return (
      <Box sx={{ p: 3, fontFamily: 'monospace', color: theme.palette.text.secondary }}>
        <Typography>Select a project to view details</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        sx={{
          fontFamily: 'monospace',
          color: theme.palette.text.secondary,
          fontSize: '0.85rem',
          mb: 2,
        }}
      >
        $ cat {project.name}/README.md
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          color: theme.palette.primary.main,
          mb: 2,
        }}
      >
        # {project.name}
      </Typography>

      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          mb: 3,
        }}
      >
        {project.description}
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
        {project.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            variant="outlined"
            sx={{ fontFamily: 'monospace', fontSize: '0.75rem' }}
          />
        ))}
      </Stack>

      <Box sx={{ display: 'flex', gap: 2, fontFamily: 'monospace' }}>
        {project.github && (
          <Box
            component="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: theme.palette.text.primary,
              textDecoration: 'none',
              fontSize: '0.9rem',
              '&:hover': { color: theme.palette.primary.main },
            }}
          >
            <GitHub fontSize="small" /> repo
          </Box>
        )}
        {project.demo && (
          <Box
            component="a"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: theme.palette.text.primary,
              textDecoration: 'none',
              fontSize: '0.9rem',
              '&:hover': { color: theme.palette.primary.main },
            }}
          >
            <OpenInNew fontSize="small" /> demo
          </Box>
        )}
      </Box>
    </Box>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          mb: 4,
          p: 2,
          fontFamily: 'monospace',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            color: theme.palette.text.secondary,
          }}
        >
          $ ls -la ~/projects/
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '300px 1fr' },
          gap: 0,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: theme.palette.mode === 'dark' ? '#1a1a2e' : '#f5f5f5',
        }}
      >
        <Box
          sx={{
            borderRight: { md: `1px solid ${theme.palette.divider}` },
            borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
          }}
        >
          <Box
            sx={{
              p: 2,
              borderBottom: `1px solid ${theme.palette.divider}`,
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: theme.palette.text.secondary,
            }}
          >
            ~/projects
          </Box>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject?.id === project.id}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </Box>

        <Box sx={{ minHeight: 300 }}>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              p: 2,
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27ca40' }} />
          </Box>
          <ProjectDetail project={selectedProject} />
        </Box>
      </Box>
    </Container>
  );
};

export default Portfolio;

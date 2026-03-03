import React from 'react';
import {
  Typography,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Divider,
} from '@mui/material';

// MUI component mappings for react-markdown
export const markdownComponents = {
  h1: ({ children }) => (
    <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography variant="body1" paragraph>
      {children}
    </Typography>
  ),
  a: ({ href, children }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
      {children}
    </Box>
  ),
  ol: ({ children }) => (
    <Box component="ol" sx={{ pl: 2, mb: 2 }}>
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
      {children}
    </Typography>
  ),
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  hr: () => <Divider sx={{ my: 3 }} />,
  blockquote: ({ children }) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: 4,
        borderColor: 'primary.main',
        pl: 2,
        py: 1,
        my: 2,
        fontStyle: 'italic',
      }}
    >
      {children}
    </Box>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <Box
        component="code"
        sx={{
          backgroundColor: 'action.hover',
          px: 0.5,
          borderRadius: 0.5,
          fontFamily: 'monospace',
        }}
      >
        {children}
      </Box>
    ) : (
      <Box
        component="pre"
        sx={{
          backgroundColor: 'action.hover',
          p: 2,
          borderRadius: 1,
          overflow: 'auto',
          fontFamily: 'monospace',
        }}
      >
        <code>{children}</code>
      </Box>
    ),
  table: ({ children }) => (
    <TableContainer component={Paper} sx={{ my: 2 }}>
      <Table size="small">{children}</Table>
    </TableContainer>
  ),
  thead: ({ children }) => <TableHead>{children}</TableHead>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => (
    <TableCell sx={{ fontWeight: 'bold' }}>{children}</TableCell>
  ),
  td: ({ children }) => <TableCell>{children}</TableCell>,
};

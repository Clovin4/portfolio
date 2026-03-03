import { useState, useEffect } from 'react';
import { Box, Container, useTheme } from '@mui/material';

const TERMINAL_LINES = [
  { type: 'command', text: '$ whoami' },
  { type: 'output', text: 'Christian Loving' },
  { type: 'command', text: '$ cat role.txt' },
  { type: 'output', text: 'Software Engineer @ Xylem' },
  { type: 'command', text: '$ ls skills/' },
  { type: 'output', text: 'python/  aws/  data-pipelines/  docker/  terraform/' },
  { type: 'command', text: '$ head -3 interests.md' },
  { type: 'output', text: 'Data Engineering | Cloud Architecture | ML/AI' },
  { type: 'command', text: '$ echo $LOCATION' },
  { type: 'output', text: 'New Orleans, LA' },
  { type: 'command', text: '$ _', cursor: true },
];

const TypingLine = ({ line, onComplete, isActive }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (!isActive) return;

    if (line.cursor) {
      setShowCursor(true);
      return;
    }

    let index = 0;
    const speed = line.type === 'command' ? 50 : 15;

    const timer = setInterval(() => {
      if (index < line.text.length) {
        setDisplayedText(line.text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [isActive, line, onComplete]);

  const isCommand = line.type === 'command';

  return (
    <Box
      component="div"
      sx={{
        fontFamily: 'monospace',
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
        color: isCommand ? theme.palette.primary.main : theme.palette.text.secondary,
        minHeight: '1.5em',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {displayedText}
      {showCursor && (
        <Box
          component="span"
          sx={{
            animation: 'blink 1s step-end infinite',
            '@keyframes blink': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0 },
            },
          }}
        >
          █
        </Box>
      )}
    </Box>
  );
};

const Home = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const theme = useTheme();

  const handleLineComplete = () => {
    setIsTyping(false);
    setTimeout(() => {
      setCurrentLine((prev) => prev + 1);
      setIsTyping(true);
    }, 300);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 4,
          p: 3,
          backgroundColor: theme.palette.mode === 'dark' ? '#1a1a2e' : '#f5f5f5',
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
          minHeight: '400px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            mb: 2,
            pb: 2,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27ca40' }} />
          <Box
            component="span"
            sx={{
              ml: 2,
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: theme.palette.text.secondary,
            }}
          >
            christian@portfolio ~
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {TERMINAL_LINES.slice(0, currentLine).map((line, index) => (
            <Box
              key={index}
              component="div"
              sx={{
                fontFamily: 'monospace',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                color: line.type === 'command' ? theme.palette.primary.main : theme.palette.text.secondary,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {line.text}
            </Box>
          ))}

          {currentLine < TERMINAL_LINES.length && isTyping && (
            <TypingLine
              key={currentLine}
              line={TERMINAL_LINES[currentLine]}
              onComplete={handleLineComplete}
              isActive={true}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

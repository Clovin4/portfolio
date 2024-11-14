import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0fb59c', // Andromeda primary color
    },
    secondary: {
      main: '#f39d12', // Andromeda secondary color
    },
    background: {
      default: '#f2f1f1', // Eggshell background color
      paper: '#FFFFFF',   // White paper color
    },
    text: {
      primary: '#000000', // Black primary text color
      secondary: '#333333', // Dark gray secondary text color
    },
    error: {
      main: '#FC644D', // Andromeda error color
    },
    warning: {
      main: '#FF9F2E', // Andromeda warning color
    },
    info: {
      main: '#00b0ff', // Andromeda info color
    },
    success: {
      main: '#96E072', // Andromeda success color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0fb59c', // Andromeda primary color
    },
    secondary: {
      main: '#f39d12', // Andromeda secondary color
    },
    background: {
      default: '#23262E', // Slate background color
      paper: '#2b303b',   // Darker slate paper color
    },
    text: {
      primary: '#D5CED9', // Andromeda primary text color
      secondary: '#746f77', // Andromeda secondary text color
    },
    error: {
      main: '#FC644D', // Andromeda error color
    },
    warning: {
      main: '#FF9F2E', // Andromeda warning color
    },
    info: {
      main: '#00b0ff', // Andromeda info color
    },
    success: {
      main: '#96E072', // Andromeda success color
    },
  },
});

export { lightTheme, darkTheme };

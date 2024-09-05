import React, { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import Home from './pages/Home';

const { darkAlgorithm, defaultAlgorithm } = theme;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeConfig = {
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    token: {
      colorPrimary: isDarkMode ? '#1890ff' : '#096dd9',
    },
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </ConfigProvider>
  );
};

export default App;

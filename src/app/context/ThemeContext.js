import React, { createContext, useState } from 'react';

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const changeCurrentTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

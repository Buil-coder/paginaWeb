// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { darkTheme, lightTheme } from '../data/colors.jsx';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark');

  const theme = themeName === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setThemeName((prevThemeName) => (prevThemeName === 'dark' ? 'light' : 'dark'));
  };

  // Establecer variables CSS en el :root cuando el tema cambia
  useEffect(() => {
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
      root.style.setProperty(`--${key}`, theme[key]);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

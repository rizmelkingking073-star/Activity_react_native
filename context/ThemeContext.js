import React, { createContext, useContext, useState } from 'react';

const lightTheme = {
  background: '#F4F6FA',
  card: '#FFFFFF',
  text: '#1B1F2A',
  subtext: '#6B7280',
  primary: '#4F46E5',
  onPrimary: '#FFFFFF',
};

const darkTheme = {
  background: '#0F1115',
  card: '#1C1F26',
  text: '#F3F4F6',
  subtext: '#9CA3AF',
  primary: '#818CF8',
  onPrimary: '#0F1115',
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [userName, setUserName] = useState('Student');

  const value = {
    isDark,
    userName,
    setUserName,
    toggleTheme: () => setIsDark((prev) => !prev),
    theme: isDark ? darkTheme : lightTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
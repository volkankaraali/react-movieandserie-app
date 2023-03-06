import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function useDarkMode() {
  const { theme, changeTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      changeTheme('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
      changeTheme('light')
    }
  }


  return handleTheme;
}

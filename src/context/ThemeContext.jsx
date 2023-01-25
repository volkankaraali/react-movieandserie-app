import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem('darkModeTheme') || false));

  useEffect(() => changeTheme(JSON.parse(localStorage.getItem('darkModeTheme'))), [darkTheme])


  const changeTheme = (isDarkMode) => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }

  const changeDarkTheme = (darkModeTheme) => {
    localStorage.setItem('darkModeTheme', darkModeTheme)
    setDarkTheme(darkModeTheme)
  }

  const values = {
    darkTheme,
    changeDarkTheme,
  }
  return (
    <ThemeContext.Provider value={values} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);

import React from 'react';
import { useTheme } from '../context/ThemeContext';

// icons
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

export default function DarkThemeButton() {

  const { darkTheme, changeDarkTheme } = useTheme();

  if (darkTheme) {
    return <BsSunFill className='text-white text-2xl cursor-pointer' onClick={() => changeDarkTheme(false)} />
  }
  return (
    <MdDarkMode className='text-2xl cursor-pointer' onClick={() => changeDarkTheme(true)} />
  )
}

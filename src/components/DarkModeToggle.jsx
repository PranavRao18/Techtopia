import { DarkMode, LightMode } from '@mui/icons-material';
import React from 'react';
import { useDarkMode } from '../DarkModeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className="text-white p-1" onClick={toggleDarkMode}>
      {darkMode ? <LightMode style={{ color: '#000' }} /> : <DarkMode/>}
    </button>
  );
};

export default DarkModeToggle;

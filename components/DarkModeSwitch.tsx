'use client';

import React, { useEffect, useState } from 'react';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness5Icon from '@mui/icons-material/Brightness5';

import { useTheme } from 'next-themes';

interface DarkModeSwitchProps {
  handleThemeToggle: () => void;
}

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  console.log('check lang', theme);

  return (
    <>
      {mounted &&
        (currentTheme === 'dark' ? (
          <Brightness5Icon onClick={() => setTheme('light')} />
        ) : (
          <NightlightIcon onClick={() => setTheme('dark')} />
        ))}
    </>
  );
};

export default DarkModeSwitch;

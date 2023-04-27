'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from './MenuItem';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useTheme } from 'next-themes';

const CustomBox = styled(Box)`
  padding: 0 20px;
  display: flex;
  justify-content: space-evenly;
`;

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1% 5%',
        }}
      >
        <CustomBox>
          <MenuItem title="HOME" address="/" icon={HomeIcon} />
          <MenuItem title="ABOUT" address="/about" icon={InfoIcon} />
        </CustomBox>

        <CustomBox>
          <DarkModeSwitch />
          <Typography
            sx={{
              backgroundColor: '#FFB84C',
              borderRadius: '30px',
              color: '#fff',
              fontWeight: '900',
              height: '30px',
              width: '55px',
              textAlign: 'center',
            }}
          >
            IMDb
          </Typography>
          <Link href="/">
            <Typography sx={{ textAlign: 'center', padding: '0 5px' }}>
              Clone
            </Typography>
          </Link>
        </CustomBox>
      </Box>
    </>
  );
};

export default Header;

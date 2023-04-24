'use client';
import React from 'react';
import NavbarItem from './NavbarItem';
import { Box, Stack } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={3}
        height="3em"
        sx={{
          backgroundColor: '#BFCCB5',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Stack>
    </>
  );
};

export default Navbar;

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
          backgroundColor: '#FEF3c7',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NavbarItem
          title="Most Popular Movies"
          param="fetchMostPopularMovies"
        />
        <NavbarItem title="Coming Soon" param="fetchComingSoon" />
      </Stack>
    </>
  );
};

export default Navbar;

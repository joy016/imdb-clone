'use client';
import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { useSearchParams } from 'next/navigation';

interface NavbarItemProps {
  title: string;
  param: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  const StyledTypography = styled(Typography)`
    font-weight: bold;
    color: #000;
    font-size: 14px;

    &:hover {
      color: #f5c518;
    }
  `;

  return (
    <>
      <Link href={`/?genre=${param}`}>
        <StyledTypography>{title}</StyledTypography>
      </Link>
    </>
  );
};

export default NavbarItem;

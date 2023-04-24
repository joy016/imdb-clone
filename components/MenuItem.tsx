import styled from '@emotion/styled';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface AppProps {
  title: string;
  address: string;
  icon: React.ElementType;
}

const MenuItem: React.FC<AppProps> = ({ title, address, icon: Icon }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 601px) and (max-width: 960px)'
  );
  const isLargeScreen = useMediaQuery('(min-width:961px)');

  const StyledTypography = styled(Typography)`
    font-family: Arial;
    font-weight: bold;
    font-size: 16px;
    color: #333;
    padding: 0 20px;

    &:hover {
      color: red;
    }
  `;

  const responsiveIcon = isSmallScreen && <Icon />;
  const responsiveTitle =
    (isMediumScreen && <StyledTypography>{title}</StyledTypography>) ||
    (isLargeScreen && <StyledTypography>{title}</StyledTypography>);

  return (
    <>
      <Link href={address}>
        {responsiveIcon} {responsiveTitle}
      </Link>
    </>
  );
};

export default MenuItem;

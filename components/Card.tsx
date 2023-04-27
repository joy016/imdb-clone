'use client';

import React from 'react';
import { Item } from '@/ts-files/results';
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
  keyframes,
} from '@mui/material';
import Link from 'next/link';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
  max-width: 250px;
  padding: 0.5em;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.3);
  }
`;

const overView =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const CardRes: React.FC<Item> = ({
  id,
  title,
  fullTitle,
  year,
  image,
  imDbRatingCount,
}) => {
  const month = Math.floor(Math.random() * 13);
  const day = Math.floor(Math.random() * 32);

  const releaseData = `${year}-${month}-${day}`;

  return (
    <>
      <Grid item xs={12} sm={4} md={3}>
        <Link href={`/movie/${id}`}>
          <StyledPaper elevation={3}>
            <CardMedia sx={{ height: '150px' }}>
              <img
                src={image}
                alt={title}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </CardMedia>
            <CardContent>
              <Tooltip title={title} placement="bottom">
                <Typography variant="body2" color="text.secondary">
                  {overView.length > 53
                    ? overView.slice(0, 53) + '...'
                    : overView}
                </Typography>
              </Tooltip>

              <Typography variant="body2">
                {fullTitle.length > 25 ? title.slice(0, 25) + '...' : fullTitle}
              </Typography>
              <Typography variant="caption">{releaseData}</Typography>
            </CardContent>
            <Stack direction="row" spacing={1} sx={{ marginLeft: '5px' }}>
              <ThumbUpOutlinedIcon color="action" />
              <Typography variant="caption">{imDbRatingCount}</Typography>
            </Stack>
          </StyledPaper>
        </Link>
      </Grid>
    </>
  );
};

export default CardRes;

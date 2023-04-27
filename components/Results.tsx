'use client';

import { ResultsProps } from '@/ts-files/results';
import React from 'react';
import CardRes from './Card';
import { Box, Grid } from '@mui/material';

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <>
      <Box sx={{ padding: '3% 10%', justifyItems: 'center' }}>
        <Grid container rowSpacing={3} columnSpacing={1}>
          {results.map((cardResult) => (
            <CardRes key={cardResult.id} {...cardResult} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Results;

import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="Geograpgy Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
}

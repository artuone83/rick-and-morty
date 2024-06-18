import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const LoadingIndicator = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <CircularProgress />
    </Box>
  );
};

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { mockDataTeam } from '../../data/mockData';
import { tokens } from '../../theme';
import Header from '../../components/Header';

export default function index() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [{ field: 'id', headerName: 'ID' }];

  return (
    <Box>
      <Header
        title="TEAM"
        subtitle="Managing the Team members"
      />
      <Box>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';
import { tokens } from '../../theme';
import Header from '../../components/Header';

export default function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id', headerName: 'ID',
    }, // column won't grow
    {
      field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell',
    }, // column will grow
    {
      field: 'phone', headerName: 'Phone Number', flex: 1,
    }, // column will grow
    {
      field: 'email', headerName: 'Email', flex: 1,
    }, // column will grow
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          $
          {params.row.cost}
        </Typography>
      ),
    }, // column will grow
    {
      field: 'date', headerName: 'Date', flex: 1,
    }, // column will grow
  ];

  return (
    <Box m="20px">
      <Header
        title="INVOICES"
        subtitle="Balances"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

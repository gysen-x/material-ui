import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';
import { tokens } from '../../theme';
import Header from '../../components/Header';

export default function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id', headerName: 'ID', flex: 0.5,
    }, // column won't grow
    {
      field: 'registrarId', headerName: 'Redistrar ID', flex: 0.5,
    }, // column won't grow
    {
      field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell',
    }, // column will grow
    {
      field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left',
    }, // column will align to left
    {
      field: 'phone', headerName: 'Phone Number', flex: 1,
    }, // column will grow
    {
      field: 'email', headerName: 'Email', flex: 1,
    }, // column will grow
    {
      field: 'address', headerName: 'Address', flex: 1,
    }, // column will grow
    {
      field: 'city', headerName: 'City', flex: 1,
    }, // column will grow
    {
      field: 'zipCode', headerName: 'ZipCode', flex: 1,
    }, // column will grow
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of contacts"
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
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}

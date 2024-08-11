import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import DialogAddEmployee from "./DialogAddEmployee";

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function AddUsers() {
    const [isOpen, setIsOpen] = React.useState(false);
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Title', width: 300 },
        { field: 'designation', headerName: 'Designation', width: 600 }
      ]
    const Users=[{'id':1,'name':'Doctor1','designation':'GP'},{'id':2,'name':'Doctor2','designation':'GP'}]
    const handleOpen = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
     <DialogAddEmployee
        isDialogOpened={isOpen}
        handleCloseDialog={() => setIsOpen(false)}
      />
    
    <Grid container spacing={2} >
   
       <Grid item xs={12}  justifyContent="flex-end">
        <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<Add />} onClick={() => handleOpen()}>
          Add Employee
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete Employee
        </Button>
       </Stack>
        </Grid>
        <Grid item xs={12}>
        <DataGrid
            rows={Users}
            columns={columns}
            pageSizeOptions={[5, 10, 25]}
            slots={{ toolbar: GridToolbar }}
          />
          </Grid>
    </Grid>
    </>
  );
}
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function AddTreatments() {
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Treatment', width: 300 }
      ]
    const Users=[{'id':1,'name':'Root Canal'},{'id':2,'name':'Root Canal'}]
  return (
    <div style={{ height: 400, width: '100%' }}>
         <DataGrid
            rows={Users}
            columns={columns}
            pageSizeOptions={[5, 10, 25]}
            slots={{ toolbar: GridToolbar }}
          />

    </div>
  );
}
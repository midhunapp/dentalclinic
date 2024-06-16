import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function AddUsers() {
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Title', width: 300 },
        { field: 'designation', headerName: 'Designation', width: 600 }
      ]
    const Users=[{'id':1,'name':'Doctor1','designation':'GP'},{'id':2,'name':'Doctor2','designation':'GP'}]
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
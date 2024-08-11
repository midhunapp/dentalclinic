import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,DialogProps,Typography,TextField
} from '@mui/material';
import{ Grid,Stack} from '@mui/material';
import Button from '@mui/material/Button';
import SelectNationality from '../shared/SelectNationality'
import SelectUserTypes from '../shared/SelectUserTypes'
import  { SelectChangeEvent } from '@mui/material/Select';

export default function MaxWidthDialog({ isDialogOpened , handleCloseDialog }: { isDialogOpened: boolean; handleCloseDialog: () => void;} ) {
  useEffect(() => {
    handleClickOpen();
  }, []);

  const [nationality, setNationality] = React.useState('');
  const [usertype, setUsertype] = React.useState('');
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('md');

  const handleClickOpen = () => {
    //setOpen(true);
    //setTimeout(() => setOpen(false), 16000);
  };

  const handleClose = () => {
    //setOpen(false);
    handleCloseDialog();
  };

  const handleNationalityChange = (event: SelectChangeEvent<unknown>) => {
    setNationality(event.target.value as string);
  };
  const handleUserTypeChange = (event: SelectChangeEvent<unknown>) => {
    setUsertype(event.target.value as string);
    alert(usertype);
  };


  const handleFullWidthChange = (event:any) => {
    setFullWidth(event.target.checked);
  };
  const saveEmployee=()=>{

  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Grid container spacing={2} >
            <Grid item xs={6}>
                <SelectUserTypes  handleChange={handleUserTypeChange} selectedUserType={usertype}/>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <TextField id="outlined-helperText" label="First name" variant="outlined" fullWidth />
            </Grid>
            
            <Grid item xs={6}>
                <TextField id="outlined-helperText" label="Last name" variant="outlined" fullWidth />
            </Grid>

           
            <Grid item xs={6}>
                <TextField id="outlined-helperText" label="Designation" variant="outlined" fullWidth/>
            </Grid>
            
            <Grid item xs={6}>
                <TextField id="outlined-helperText" label="Phone Number" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <SelectNationality  handleNationalityChange={handleNationalityChange}/>
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-helperText" label="Moh" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={6}>
                <TextField id="outlined-helperText" label="Email" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained"  onClick={() => saveEmployee()}>
                  Save
              </Button>
            </Grid>
            
          </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

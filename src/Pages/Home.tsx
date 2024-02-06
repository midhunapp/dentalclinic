import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack,TextField,Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { login } from '../features/auth/authActions'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Home() {
  const dispatch = useAppDispatch()
  const initialValues = {
    username: "",
    usertype: "",
    password: "",
  };
  const validationSchema= Yup.object({
    username: Yup
      .string()
      .max(255)
      .required('Username is required'),
    password: Yup
      .string()
      .max(255)
      .required('Password is required')
  });
  const handleLogin = (formValue:any) => {
    const { username, usertype, password } = formValue;

    //setSuccessful(false);
    const loginData={
      username,
      usertype,
      password
    }
    dispatch(login(loginData))
      .unwrap()
      .then(() => {
       // setSuccessful(true);
      })
      .catch(() => {
        //setSuccessful(false);
      });
  };
 

  return (
    <React.Fragment>
      <CssBaseline />

      <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
  sx={{ borderColor: 'primary.main' ,border: 1}}
>
<Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
<form>
    <Box sx={{border:1,borderColor:'black',backgroundColor:green}} minHeight="50vh" minWidth="50vw" >
      <Stack spacing={2} sx={{p:5}}>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">User Type</InputLabel>
        <Select id="user-type-select" label="User Type *">
          <MenuItem value=""><em>None</em></MenuItem>   
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Reception</MenuItem>
          <MenuItem value={30}>Doctor</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="User Name"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" color="secondary" type="submit">Login</Button>
      </Stack>
      </Box>
      </form>
      </Formik>
      </Box>
    </React.Fragment>
  );
}
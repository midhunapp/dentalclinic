import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack,TextField,Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { login } from '../features/auth/authActions'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Option} from '../interfaces'
import authService from '../Services/auth.services'
import { useNavigate, useNavigation } from "react-router-dom";

export default function Home() {
  const dispatch = useAppDispatch()
  const [roleList, setRoleList] = useState<Option[]>([]);
  const [username,setUsername]=useState("");
  const [userType,setUserType]=useState("");
  const [password,setPassword]=useState("");
  //const navigate = useNavigate();
  /*
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
  */
  const handleLogin = (event:any) => {
    event.preventDefault();

    //const { username, usertype, password } = formValue;
    //alert(username)
    //alert(userType)
   // alert(password)
   
    //setSuccessful(false);
    
    const loginData={
      username:username,
      usertype:userType,
      password:password
    }
    dispatch(login(loginData))
      .unwrap()
      .then(() => {
        alert("navigation")
       // setSuccessful(true);
      // navigate('/adminhome');
      })
      .catch(() => {
        //setSuccessful(false);
      });
      
  };
  const fetchData = async() => {
       const roles = await authService.getRoles();
      // alert(JSON.stringify(roles))
       setRoleList(roles.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  
  const rolesDropdown = roleList.map((item:Option, index) => (
    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
  ));
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

<form  onSubmit={handleLogin}>
    <Box sx={{border:1,borderColor:'black',backgroundColor:green}} minHeight="50vh" minWidth="50vw" >
      <Stack spacing={2} sx={{p:5}}>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">User Type</InputLabel>
        <Select id="user-type-select" label="User Type *" value={userType} onChange={(e)=>setUserType(e.target.value)}>
         {rolesDropdown}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <TextField
          required
          id="outlined-required"
          label="Required"
         // defaultValue="User Name"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button variant="contained" color="secondary" type="submit">Login</Button>
      </Stack>
      </Box>
      </form>

      </Box>
    </React.Fragment>
  );
}
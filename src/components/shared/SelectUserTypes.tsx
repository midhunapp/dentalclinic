import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SharedService from "../../Services/shared.services";
import {Option} from '../../interfaces'

//export default function SelectNationality(handleNationalityChange:(event: SelectChangeEvent)=>void) {
  export default function SelectUserTypes(props: {handleChange:(event: SelectChangeEvent<unknown>)=>void,selectedUserType:string}) {

  const [usertype, setUsertype] = React.useState(props.selectedUserType);
  const [usertypeList, setUsertypeList] = React.useState<Option[]>([]);
  React.useEffect(() => {
    getUserTypes();
 }, []);
  React.useEffect(() => {
     setUsertype(props.selectedUserType);
  }, [props.selectedUserType]);
  const  getUserTypes=async()=>{
    const nat = await SharedService.getUserTypes();
    setUsertypeList(nat.data);
  }

 
  const usertypesDropdown = usertypeList.map((item:Option, index) => (
    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
  ));
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="User Type"
          onChange={props.handleChange}
          value={usertype} 
        >
          {usertypesDropdown}
        </Select>
      </FormControl>
    </Box>
  );
}
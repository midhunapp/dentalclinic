import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SharedService from "../../Services/shared.services";
import {Option} from '../../interfaces'

//export default function SelectNationality(handleNationalityChange:(event: SelectChangeEvent)=>void) {
  export default function SelectNationality(props: {handleNationalityChange:(event: SelectChangeEvent<unknown>)=>void}) {
   // You need an initial value if you like to show something when page first load
  // assuming you know exactly how your data will look like
  const [nationality, setNationality] = React.useState('');
  const [nationalityList, setNationalityList] = React.useState<Option[]>([]);
 
  React.useEffect(() => {
    // Filter out categories by selected option
     getNationality();

   
    // Will change when data changes or another item selected
  }, []);
  const  getNationality=async()=>{
    const nat = await SharedService.getNationality();
    setNationalityList(nat.data);
  }

 
  const nationalityDropdown = nationalityList.map((item:Option, index) => (
    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
  ));
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Nationality"
          onChange={()=>props.handleNationalityChange}
          value={nationality} 
        >
          {nationalityDropdown}
        </Select>
      </FormControl>
    </Box>
  );
}
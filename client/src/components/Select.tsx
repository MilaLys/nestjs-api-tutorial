import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <TextField
      id="outlined-select-field"
      sx={{ width: '49.5%' }}
      size="small"
      select
      value={value}
      onChange={event => onChange(event.target.value)}
      label="Sort by">
      <MenuItem key={'default'} value="" disabled>{defaultValue}</MenuItem>
      {options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;

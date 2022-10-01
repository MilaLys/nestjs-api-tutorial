import React, { forwardRef } from 'react';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Search = forwardRef((props: any, ref) => {
  return (
    <FormControl sx={{ width: '49.5%' }} variant="outlined" size="small">
      <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
      <OutlinedInput
        {...props}
        ref={ref}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Search"
      />
    </FormControl>
  );
});

export default Search;

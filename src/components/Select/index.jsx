import React from 'react';
import './styles.scss';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Index = ({ title, label, width, setValue, value }) => {
  const handleSecondSubjectChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h3>{title}</h3>
      <FormControl sx={{ minWidth: width }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={handleSecondSubjectChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Index;
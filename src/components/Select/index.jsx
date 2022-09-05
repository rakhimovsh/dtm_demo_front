import React from 'react';
import './styles.scss';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Index = ({ title, label, width, setValue, value, data }) => {
  const handleSecondSubjectChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div>
      <h3>{title}</h3>
      <FormControl sx={{ minWidth: width }} disabled={data ? false : true} required>
        <InputLabel id="label">{label}</InputLabel>
        <Select
          labelId="label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={handleSecondSubjectChange}
        >
          {
            data && data?.data.map(item => (<MenuItem key={item.subject_id}
                                                      value={item.subject_id}>{item.subject}</MenuItem>))
          }
        </Select>
      </FormControl>
    </div>
  );
};

export default Index;
import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import './Register.scss';
import Back from '../components/Back';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { alpha, styled } from '@mui/material/styles';


const Register = () => {
  const [region, setRegion] = React.useState('');

  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  return (<div className="container">
    <Back />
    <div className="form-container">
      <Box
        component="form"
        noValidate
        sx={{
          width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <h3>
          Royhatdan otish
        </h3>
        <Box sx={{
          margin: '0 0 25px', width: '100%',
        }}>
          <TextField fullWidth label="Full Name" variant="standard" />
        </Box>
        <Box sx={{
          margin: '0 0 25px', width: '100%',
        }}>
          <TextField fullWidth label="Email or phone" variant="standard" />
        </Box>
        <Box sx={{
          margin: '0 0 25px', width: '100%',
        }}>
          <TextField fullWidth label="UserName" variant="standard" />
        </Box>
        <FormControl variant="standard" sx={{ m: 1, minWidth: '100%' }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={region}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{
          margin: '0 0 25px', width: '100%',
        }}>
          <TextField fullWidth label="password" variant="standard" />
        </Box>
        <Box>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <Radio value="female" label="Female" />
            <Radio value="male" label="Male" />
          </RadioGroup>
        </Box>
      </Box>
    </div>
  </div>);
};

export default Register;
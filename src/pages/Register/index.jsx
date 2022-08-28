import React, { useContext, useState } from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../../context/auth';
import { api } from '../../lib/api';


const Index = () => {
  const { setToken } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleBtnClick = async () => {
    const { data } = await api().post('/register', { fullName, username, password });
    if (data.token) {
      setToken(data.token);
    } else {
      alert('ma`lumotlar xato kiritildi');
    }
  };
  return (<div className="container">
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
          <TextField fullWidth label="Full Name" variant="standard" onChange={(evt) => setFullName(evt.target.value)} />
        </Box>
        <Box sx={{
          margin: '0 0 25px', width: '100%',
        }}>
          <TextField fullWidth label="Username" variant="standard" onChange={(evt) => setUsername(evt.target.value)} />
        </Box>
        <Box sx={{
          margin: '0 0 25px', width: '100%',
        }}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </Box>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <Button variant="outlined" size="large" onClick={handleBtnClick}>Ro`yhatdan o`tish</Button>
        <Link to="/login" style={{ marginTop: 20 }}>Kirish</Link>
      </Box>
    </div>
  </div>);
};

export default Index;
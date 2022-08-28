import React from 'react';
import './index.scss';
import { Divider, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const TestItem = () => {
  return (
    <li className="test-item">
      <h4>#1 Choose the answer which correctly completes the sentence.</h4>
      <p> When I got home I found an envelope on the table. In it was a … card from Aunt Alice for passing my French
        exam.</p>

      <RadioGroup
        style={{ marginBottom: 35 }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio color="success" />} label="congratulation’s" />
        <FormControlLabel value="2" control={<Radio color="error" />} label="congratulations" />
        <FormControlLabel value="3" control={<Radio />} label="congratulation" />
        <FormControlLabel value="4" control={<Radio />} label="congratulations’" />
      </RadioGroup>
      <Divider />
    </li>
  );
};

export default TestItem;
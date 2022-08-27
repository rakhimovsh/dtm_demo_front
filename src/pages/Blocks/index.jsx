import React from 'react';

import './styles.scss';
import Back from '../../components/Back';
import { Button } from '@mui/material';
import Select from '../../components/Select';

const Index = () => {

  const [firstSubject, setFirstSubject] = React.useState('');
  const [secondSubject, setSecondSubject] = React.useState('');


  return (
    <div className="blocks">
      <div className="container">
        <Back />
        <h2 className="blocks__title">Asosiy Imtihonga hush kelibsiz</h2>
        <div className='blocks__select-collection'>
          <Select title="Birinchi fan" label="Blok 1" value={firstSubject} setValue={setFirstSubject} width={540} />
          <Select title="Ikkinchi fan" label="Blok 2" value={secondSubject} setValue={setSecondSubject} width={540} />
        < /div>
        <Button style={{ display: 'block', marginTop: 50 }} variant="contained">Keyingi</Button>

      </div>
    </div>
  );
};

export default Index;
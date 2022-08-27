import React, { useState } from 'react';
import './styles.scss';
import Back from '../../components/Back';
import Select from '../../components/Select';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [university, setUniversity] = useState('');
  const [faculty, setFaculty] = useState('');

  const navigate = useNavigate();
  return (
    <div className="university">
      <div className="container">
        <Back />
        <h2 className="university__title">Blok testlar hush kelibsiz</h2>
        <div className="university__body">
          <div className="university__selection">
            <Select title="OTM nomi" setValue={setUniversity} value={university} label="OTM" width={540} />
            <Select title="Fakultet nomi" setValue={setFaculty} value={faculty} label="Fakultet" width={540} />
          </div>
          <div className="university__info">
            <div className="university__selected-faculty">

            </div>
            <div className="university__score">

            </div>
          </div>

        </div>
        <Button variant="contained" onClick={() => navigate('/test')}>Testni boshlash</Button>

      </div>
    </div>
  );
};

export default Index;
import React from 'react';
import './styles.scss';
import TestItem from '../../components/TestItem';
import { Button } from '@mui/material';

const Index = () => {
  return (
    <div className="test">
      <div className="container">
        <h2 className="test__title">Ingliz tili</h2>
        <ul className="test__list">
          <TestItem />
          <TestItem />
        </ul>

        <Button variant="contained">Yakunlash</Button>
      </div>
    </div>
  );
};

export default Index;
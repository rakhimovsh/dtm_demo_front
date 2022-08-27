import React from 'react';
import './styles.scss';
import Progress from '../../components/Progress';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="result">
      <div className="container">
        <h2 className="result__title">Asosiy</h2>
        <div className="result__progress">
          <div className="result__progress-tab">
            <h3>Ingliz tili</h3>
            <div style={{ width: 653 }}><Progress value={70} color="primary" /></div>
            <span>7/10</span>
          </div>
          <div className="result__progress-tab">
            <h3>Matematika</h3>
            <div style={{ width: 653 }}><Progress value={80} color="secondary" /></div>
            <span>8/10</span>
          </div>
        </div>
        <h3 className="result__res-title">Natija</h3>
        <ul className="result__res-list">
          <li>Ta'lim muassasi:</li>
          <li>Yo`nalish:</li>
          <li>Ta'lim turi:</li>
        </ul>


        <div style={{ display: 'flex', gap: 30 }}>
          <Button variant="contained" onClick={() => navigate('/profile')}>Profil</Button>
          <Button variant="contained" onClick={() => navigate('/all-results')}>Natijalar</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
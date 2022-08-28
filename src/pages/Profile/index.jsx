import React from 'react';
import './styles.scss';
import Accardion from '../../components/Accardion';

const Index = () => {
  return (
    <div className="profile">
      <div className="container">
        <h2>Testlar</h2>

        <div>
          <Accardion />
          <Accardion />
        </div>
      </div>
    </div>
  );
};

export default Index;
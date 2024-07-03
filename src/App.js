
import React, { useState } from 'react';
import OuraAuthorization from './OuraAuthorization';
import OuraData from './OuraData';
import './App.css';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  return (
    <div>
      <h1>Oura Ring Data</h1>
      <OuraAuthorization setAccessToken={setAccessToken} />
      {accessToken && <OuraData accessToken={accessToken} />}
    </div>
  );
};

export default App;
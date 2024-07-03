// App.js
import React, { useState } from 'react';
import OuraAuth from './OuraAuth';
import OuraData from './OuraData';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  return (
    <div>
      <h1>Oura Ring Data</h1>
      <OuraAuth setAccessToken={setAccessToken} />
      {accessToken && <OuraData accessToken={accessToken} />}
    </div>
  );
};

export default App;

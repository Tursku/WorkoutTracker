import React, { useEffect, useState } from 'react';
import OuraService from './OuraService';

console.log('Client ID:', process.env.REACT_APP_CLIENT_ID);
console.log('Client Secret:', process.env.REACT_APP_CLIENT_SECRET);
console.log('Redirect URI:', process.env.REACT_APP_REDIRECT_URI);
console.log('Bearer Token:', process.env.REACT_APP_BEARER_TOKEN);

const App = () => {
  const [sleepData, setSleepData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    OuraService.getSleepData()
      .then(response => {
        setSleepData(response.data);
      })
      .catch(error => {
        setError('Failed to fetch sleep data');
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Oura Data</h1>
      {error && <p>{error}</p>}
      {sleepData && (
        <div>
          <h2>Sleep Data</h2>
          <pre>{JSON.stringify(sleepData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;


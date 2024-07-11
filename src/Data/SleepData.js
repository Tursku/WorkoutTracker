import React, { useState } from 'react';
import OuraService from '../OuraDataFetch';

const SleepData = ({ setError }) => {
  const [sleepData, setSleepData] = useState(null);

  const fetchSleepData = () => {
    OuraService.getSleepData()
      .then(response => {
        setSleepData(response.data);
        setError(null);
      })
      .catch(error => {
        setError('Failed to connect to server');
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchSleepData}>Sleep Data</button>
      {sleepData && (
        <div>
          <h2>Sleep Data</h2>
          <pre>{JSON.stringify(sleepData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SleepData;

import React, { useState } from 'react';
import OuraDataFetch from '../OuraDataFetch';

const SleepData = ({ sleepData }) => { //Data preview
  return (
    <div>
      {sleepData && (
        <div>
          <pre>{JSON.stringify(sleepData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const fetchSleepData = ({ setError, setSleepData, clearWorkoutData }) => {
  clearWorkoutData(); // Remember this :)
  OuraDataFetch.getSleepData()
    .then(response => {
      setSleepData(response.data);
      setError(null);
    })
    .catch(error => {
      setError('Failed to connect to server');
      console.error('Error:', error);
    });
};

export default SleepData;
export { fetchSleepData };

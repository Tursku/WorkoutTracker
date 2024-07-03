
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OuraData = ({ accessToken }) => {
  const [sleepData, setSleepData] = useState(null);

  useEffect(() => {
    if (accessToken) {
      axios.get('https://api.ouraring.com/v1/sleep', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => setSleepData(response.data))
        .catch(error => console.error('Error fetching sleep data:', error));
    }
  }, [accessToken]);

  return (
    <div>
      {sleepData ? (
        <div>
          <h2>Sleep Data</h2>
          {/* Display sleep data here */}
          <pre>{JSON.stringify(sleepData, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default OuraData;
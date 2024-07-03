// OuraData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OuraData = ({ accessToken }) => {
  const [sleepData, setSleepData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [readinessData, setReadinessData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sleepResponse = await axios.get('https://api.ouraring.com/v1/sleep', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setSleepData(sleepResponse.data);

        const activityResponse = await axios.get('https://api.ouraring.com/v1/activity', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setActivityData(activityResponse.data);

        const readinessResponse = await axios.get('https://api.ouraring.com/v1/readiness', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setReadinessData(readinessResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return (
    <div>
      {sleepData && (
        <div>
          <h2>Sleep Data</h2>
          <pre>{JSON.stringify(sleepData, null, 2)}</pre>
        </div>
      )}
      {activityData && (
        <div>
          <h2>Activity Data</h2>
          <pre>{JSON.stringify(activityData, null, 2)}</pre>
        </div>
      )}
      {readinessData && (
        <div>
          <h2>Readiness Data</h2>
          <pre>{JSON.stringify(readinessData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default OuraData;

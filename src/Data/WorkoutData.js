import React, { useState } from 'react';
import OuraService from '../OuraDataFetch';

const WorkoutData = ({ setError }) => {
  const [workoutData, setWorkoutData] = useState(null);

  const fetchWorkoutData = () => {
    OuraService.getWorkoutData()
      .then(response => {
        setWorkoutData(response.data);
        setError(null);
      })
      .catch(error => {
        setError('Failed to connect to server');
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchWorkoutData}>Workout Data</button>
      {workoutData && (
        <div>
          <h2>Workout Data</h2>
          <pre>{JSON.stringify(workoutData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default WorkoutData;

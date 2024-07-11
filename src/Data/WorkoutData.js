import React, { useState } from 'react';
import OuraDataFetch from '../OuraDataFetch';

const WorkoutData = ({ workoutData }) => { //Data preview
  return (
    <div>
      {workoutData && (
        <div>
          <pre>{JSON.stringify(workoutData, null, 2)}</pre> 
        </div>
      )}
    </div>
  );
};

const fetchWorkoutData = ({ setError, setWorkoutData, clearSleepData }) => {
  clearSleepData(); // Remember this :)
  OuraDataFetch.getWorkoutData()
    .then(response => {
      setWorkoutData(response.data);
      setError(null);
    })
    .catch(error => {
      setError('Failed to connect to server');
      console.error('Error:', error);
    });
};

export default WorkoutData;
export { fetchWorkoutData };

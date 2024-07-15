import React, { useState } from 'react';
import SleepData, { fetchSleepData } from './Data/SleepData';
import WorkoutData, { fetchWorkoutData } from './Data/WorkoutData';

const App = () => {
  const [sleepData, setSleepData] = useState(null);
  const [workoutData, setWorkoutData] = useState(null);
  const [error, setError] = useState(null);

  const clearSleepData = () => setSleepData(null);
  const clearWorkoutData = () => setWorkoutData(null);


  const handleFetchSleepData = () => { //SleepData.js fetch
    fetchSleepData({ setError, setSleepData, clearWorkoutData });
  };
  const handleFetchWorkoutData = () => { //WorkoutData.js feth
    fetchWorkoutData({ setError, setWorkoutData, clearSleepData });
  };

  return (
    <div className="App">
      <h2>Oura API Data</h2>
      <div className="buttons">
        <button onClick={handleFetchSleepData}>Sleep Data</button>
        <button onClick={handleFetchWorkoutData}>Workout Data</button>
      </div>
      {error && <p>{error}</p>}
      <SleepData sleepData={sleepData} />
      <WorkoutData workoutData={workoutData} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import SleepData from './Data/SleepData';
import WorkoutData from './Data/WorkoutData';

console.log('Client ID:', process.env.REACT_APP_CLIENT_ID);
console.log('Client Secret:', process.env.REACT_APP_CLIENT_SECRET);
console.log('Redirect URI:', process.env.REACT_APP_REDIRECT_URI);
console.log('Bearer Token:', process.env.REACT_APP_BEARER_TOKEN);

const App = () => {
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>Oura API data</h1>
      <SleepData setError={setError} />
      <WorkoutData setError={setError} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;

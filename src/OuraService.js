import axios from 'axios';

const OuraService = {
  getSleepData: () => {
    return axios.get('http://localhost:5555/api/sleep');
  },
  getWorkoutData: () => {
    return axios.get('http://localhost:5555/api/workout');
  }
};

export default OuraService;

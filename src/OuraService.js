import axios from 'axios';

const OuraService = {
  getSleepData: () => {
    return axios.get('http://localhost:5555/api/sleep');
  }
};

export default OuraService;

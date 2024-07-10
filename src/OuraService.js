import axios from 'axios';

const OURA_API_BASE_URL = 'https://api.ouraring.com/v2/';
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

const OuraService = {
  getSleepData: () => {
    return axios.get(`${OURA_API_BASE_URL}/usercollection/sleep`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
  },
  // Add other endpoints as needed
};

export default OuraService;
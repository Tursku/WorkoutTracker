const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5555;
const OURA_API_BASE_URL = 'https://api.ouraring.com/v2/';
const BEARER_TOKEN = process.env.BEARER_TOKEN;

app.use(cors());
app.use(express.json());

app.get('/api/sleep', async (req, res) => {
  try {
    console.log('Fetching sleep data...');
    const response = await axios.get(`${OURA_API_BASE_URL}usercollection/sleep`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    console.log('Sleep data fetched successfully');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching sleep data:', error);
    res.status(500).json({ error: 'Failed to fetch sleep data' });
  }
});

app.get('/api/workout', async (req, res) => {
  try {
    console.log('Fetching workout data...');
    const response = await axios.get(`${OURA_API_BASE_URL}usercollection/workout`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    console.log('Workout data fetched successfully');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching workout data:', error);
    res.status(500).json({ error: 'Failed to fetch workout data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

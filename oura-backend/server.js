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

//Sleep API
app.get('/api/sleep', async (req, res) => {
  try {
    const response = await axios.get(`${OURA_API_BASE_URL}usercollection/sleep`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    console.log('Sleep data success');
    res.json(response.data);
  } catch (error) {
    console.error('Sleep data error:', error);
    res.status(500).json({ error: 'Sleep data unsuccesfull' });
  }
});

//Workout API .
app.get('/api/workout', async (req, res) => {
  try {
    const response = await axios.get(`${OURA_API_BASE_URL}usercollection/workout`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    console.log('Workout data succes');
    res.json(response.data);
  } catch (error) {
    console.error('Workout data error:', error);
    res.status(500).json({ error: 'Workout data unsuccesfull' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

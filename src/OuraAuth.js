
import React, { useEffect } from 'react';

const OuraAuth = ({ setAccessToken }) => {
  useEffect(() => {
    const getAccessToken = async (code) => {
      try {
        const response = await fetch('https://api.ouraring.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      getAccessToken(code);
    }
  }, [setAccessToken]);

  return (
    <div>
      <a href={`https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}>
        Connect to Oura
      </a>
    </div>
  );
};

export default OuraAuth;

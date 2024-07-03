
const OuraAuth = ({ setAccessToken }) => {
    useEffect(() => {
      // Check if the URL contains the authorization code
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
  
      if (code) {
        // Exchange the authorization code for an access token
        fetch('https://api.ouraring.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: 'YOUR_REDIRECT_URI',
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET'
          })
        })
          .then(response => response.json())
          .then(data => setAccessToken(data.access_token));
      }
    }, [setAccessToken]);
  
    return (
      <div>
        <a href={`https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI`}>Connect to Oura</a>
      </div>
    );
  };
  
  export default OuraAuth;
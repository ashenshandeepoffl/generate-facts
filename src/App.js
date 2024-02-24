import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';

function App() {
  const [catFact, setCatFact] = useState('');

  const generateCatFact = () => {
    axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    // This useEffect is still used for initial loading, if needed
    generateCatFact();
  }, []);

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set height to 100% of the viewport height
      }}
    >
      <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h5" component="div" gutterBottom>
          Cat Fact Generator
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={generateCatFact}
          style={{ margin: '1rem 0' }}
        >
          Generate Cat Fact
        </Button>
        <Typography variant="body1" color="textSecondary">
          {catFact}
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;

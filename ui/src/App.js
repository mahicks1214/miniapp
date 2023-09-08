import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import MainPage from './components/MainPage';
import { WorkoutProvider } from './components/WorkoutContext';

function App() {
  const [workouts, setWorkouts] = useState([]);
  return (
    <WorkoutProvider value={{ workouts, setWorkouts }}>
      <div>        
        <Container>
          <Box mt={4}>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Box>
        </Container>
      </div>
    </WorkoutProvider>
  );
}

export default App;
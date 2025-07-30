import { useState } from 'react'
import useHabitStore from './store/store'
import { Container, Box, Typography } from '@mui/material';
import AddHabitForm from './components/add-habit-form';
import HabitList from './components/habit-list';


function App() {
const store = useHabitStore();
console.log(store);

  return (
    <Container>
    <Box>
      <Typography variant='h2' component="h1" gutterBottom align='center'>Habit Tracker</Typography>
      {/* Form */}
      <AddHabitForm/>
      {/* list */}
      <HabitList/>
      {/* Stats */}
    </Box>
    </Container>
  )
}

export default App

import { Box, Paper, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import useHabitStore from '../store/store'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete'


function HabitList() {

    const { habits, removeHabit, toggleHabbit } = useHabitStore();

    const today = new Date().toISOString().split("T")[0];

    return <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
        {habits.map((habit) => (
            <Paper key={habit.id} elevation={2} sx={{ p: 2 }}><Grid container alignItems="center">
                <Grid>
                    <Typography variant='h6'>{habit.name}</Typography>
                    <Typography variant='body2' color='text.secondary'>{habit.frequency}</Typography>
                </Grid>
                <Grid>
                    <Box sx={{ display: 'flex', justifyContent: "flex-end", gap: 1 }}>
                        <Button
                            variant='outlined' color={habit.completedDates.includes(today) ? "success" : "primary"}
                            startIcon={<CheckCircleIcon />}
                            onClick={() => toggleHabbit(habit.id, today)}
                        >{habit.completedDates.includes(today) ? "Completed" : "Mark Complete"}</Button>
                        <Button variant='outlined' color='error'
                            startIcon={<DeleteIcon />}
                            onClick={(e) => removeHabit(habit.id)}
                        >Remove</Button>
                    </Box>
                </Grid>
            </Grid></Paper>
        ))}
    </Box>
}

export default HabitList

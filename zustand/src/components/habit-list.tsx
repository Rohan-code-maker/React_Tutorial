import { Box, Paper, Grid, Typography, Button, LinearProgress } from '@mui/material'
import useHabitStore, { type Habit } from '../store/store'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete'


function HabitList() {

    const { habits, removeHabit, toggleHabbit } = useHabitStore();

    const today = new Date().toISOString().split("T")[0];

    const getStreak = (habit: Habit) => {
        let streak = 0;
        const currentDate = new Date();
        while (true) {
            const dateString = currentDate.toISOString().split("T")[0];
            if (habit.completedDates.includes(dateString)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        return streak;
    };

    const completedToday = () => {
        return habits.reduce((count, habit) => {
            return habit.completedDates.includes(today) ? count + 1 : count;
        }, 0);
    };

    const getLongestStreak = () => {
        let prev;
        let long = 0;
        habits.forEach((habit) => {
            prev = getStreak(habit)
            if (prev > long) {
                long = prev;
            }
        })
        return long;
    }

    return <><Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 , mb:2}}>
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
                            onClick={() => removeHabit(habit.id)}
                        >Remove</Button>
                    </Box>
                </Grid>
            </Grid>
                <Box sx={{ mt: 2 }}>
                    <Typography>Current Streak : {getStreak(habit)}</Typography>
                    <LinearProgress variant="determinate" value={(getStreak(habit) / 30) * 100}
                        sx={{ mt: 3 }}
                    />
                </Box>
            </Paper>
        ))}
    </Box>
        <Paper elevation={2} sx={{ p: 2 }}><Grid container alignItems="center"></Grid>
            <Box>
                <Typography>Habits Statistics</Typography>
                <Typography>Total Habits: {habits.length}</Typography>
                <Typography>Completed Today: {completedToday()}</Typography>
                <Typography>Longest Streak: {getLongestStreak()}</Typography>
            </Box>
        </Paper>
    </>
}

export default HabitList

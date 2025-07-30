import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}

interface HabitState {
    habits: Habit[];
    addHabit: (name: string, frequency: "daily" | "weekly") => void;
    removeHabit: (id: string) => void;
    toggleHabbit: (id: string, date: string) => void;
}

const useHabitStore = create<HabitState>()(devtools(persist((set, get) => {
    return {
        habits: [],
        addHabit: (name, frequency) => set((state) => {
            return {
                habits: [
                    ...state.habits, {
                        id: Date.now().toString(),
                        name,
                        frequency,
                        completedDates: [],
                        createdAt: new Date().toISOString(),
                    }
                ]
            }
        }),
        removeHabit: (id) => set((state) => ({
            habits: state.habits.filter(habit => habit.id !== id)
        })),
        toggleHabbit: (id, date) => set((state) => (
            {
                habits: state.habits.map((habit) => habit.id === id ? {
                    ...habit,
                    completedDates: habit.completedDates.includes(date) 
                    ? habit.completedDates.filter((d) => d !== date) 
                    : [...habit.completedDates, date]
                } : habit)
            }
        ))
    }
},{
    name:'habits-local',
    // By defalut it will be stored in local storage to change it in session storage below code is for that
    // storage:createJSONStorage(()=>sessionStorage)
})))

export default useHabitStore;
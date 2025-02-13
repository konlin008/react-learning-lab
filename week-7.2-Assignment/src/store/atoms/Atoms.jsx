import { atom } from "recoil";

export const todosAtom = atom({
    key: "todos",
    default: [
        {
            title: "Grocery Shopping",
            description: "Buy veggies and fruits at 5 PM"
        },
        {
            title: "Study",
            description: "Practice 3 problems from Striver's sheet at 10 AM"
        },
        {
            title: "Workout",
            description: "Evening cardio from 6 PM to 7 PM"
        },
        {
            title: "Team Meeting",
            description: "Discuss project updates at 4 PM"
        },
        {
            title: "study",
            description: "Build a small Todo app from 3 PM to 5 PM"
        },
        {
            title: "study",
            description: "Work on the backend API at 2 PM"
        },
        {
            title: "Read Book",
            description: "Read 20 pages of Atomic Habits at 8 PM"
        },
        {
            title: "Prayer",
            description: "Maghrib at 5:45 PM"
        },
        {
            title: "study",
            description: "Finalize slides for minor project at 7 PM"
        },
        {
            title: "Watch Valorant Stream",
            description: "Catch up on the latest gameplay at 9 PM"
        }
    ]

})
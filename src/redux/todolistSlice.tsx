import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type TaskType = {
  id: string;
  title: string;
  isComplete: boolean;
};
type InitialSate = {
  todolist: Array<TaskType>;
};
const initialState: InitialSate = {
  todolist: [
    { id: uuidv4(), title: 'LearnJS', isComplete: false },
    { id: uuidv4(), title: 'Learn ReactJS', isComplete: false },
  ],
};
const slice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {},
});

export const todolist = slice.reducer;

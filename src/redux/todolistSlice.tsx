import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type TaskType = {
  id: string;
  title: string;
  isComplete: boolean;
};
type InitialSate = {
  todolist: Array<TaskType>;
  inputValue: string;
};
const initialState: InitialSate = {
  todolist: [
    { id: uuidv4(), title: 'LearnJS', isComplete: false },
    { id: uuidv4(), title: 'Learn ReactJS', isComplete: false },
  ],
  inputValue: '',
};
const slice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    updateingInputValue: (state, action: PayloadAction<{ value: string }>) => {
      state.inputValue = action.payload.value;
    },
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const newTask = {
        id: uuidv4(),
        title: action.payload.title,
        isComplete: false,
      };
      state.todolist.unshift(newTask);
    },
    removeTask: (state, action: PayloadAction<{ taskID: string }>) => {
      const index = state.todolist.findIndex(
        (todo) => todo.id === action.payload.taskID
      );
      if (index !== -1) state.todolist.splice(index, 1);
    },
    changeTaskStatus: (state, action: PayloadAction<{ taskID: string }>) => {},
  },
});

export const todolist = slice.reducer;
export const todolistActions = slice.actions;

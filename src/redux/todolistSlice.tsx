import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todolistAPI } from '../api/todolistapi';

export type TaskType = {
  id: number;
  title: string;
  isComplete: boolean;
};
type InitialSate = {
  todolist: Array<TaskType>;
  inputValue: string;
};
const initialState: InitialSate = {
  todolist: [] as TaskType[],
  inputValue: '',
};
const slice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    updateInputValue: (state, action: PayloadAction<{ value: string }>) => {
      state.inputValue = action.payload.value;
    },
    removeTask: (state, action: PayloadAction<{ taskID: number }>) => {
      const index = state.todolist.findIndex(
        (todo) => todo.id === action.payload.taskID
      );
      if (index !== -1) state.todolist.splice(index, 1);
    },
    changeTaskStatus: (
      state,
      action: PayloadAction<{ value: boolean; taskID: number }>
    ) => {
      state.todolist = state.todolist.map((task) =>
        task.id === action.payload.taskID
          ? { ...task, isComplete: !action.payload.value }
          : task
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.todolist = action.payload?.tasks;
    });
  },
});

const fetchTasks = createAsyncThunk('todos/getTodos', async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await todolistAPI.getTasks();
    const tasks = res.data;
    return { tasks };
  } catch (error) {
    return rejectWithValue(null);
  }
});

export const todolist = slice.reducer;
export const todolistActions = slice.actions;
export const tasksThunks = { fetchTasks };

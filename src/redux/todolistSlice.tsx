import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UpdateTaskStatusArg, todolistAPI } from '../api/todolistapi';

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.todolist = action.payload?.tasks;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.todolist.push(action.payload.task);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const index = state.todolist.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) state.todolist.splice(index, 1);
      })
      .addCase(updateTaskStatus.fulfilled, (state, action) => {
        const index = state.todolist.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1)
          state.todolist[index].isComplete = action.payload.isComplete;
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

const addTask = createAsyncThunk(
  'todos/addTodo',
  async (arg: TaskType, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await todolistAPI.postTask(arg);
      const task = res.data;
      return { task };
    } catch (error) {
      return rejectWithValue(null);
    }
  }
);
const deleteTask = createAsyncThunk(
  'todos/deleteTodo',
  async (taskID: number, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await todolistAPI.deleteTask(taskID);
      const id = res.data;
      return { id };
    } catch (error) {
      return rejectWithValue(null);
    }
  }
);
const updateTaskStatus = createAsyncThunk<TaskType, UpdateTaskStatusArg>(
  'todos/updateTodo',
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const res = await todolistAPI.updateTaskStatus(arg);
      const task = res.data;
      return { task };
    } catch (error) {}
  }
);

export const todolist = slice.reducer;
export const todolistActions = slice.actions;
export const tasksThunks = {
  fetchTasks,
  addTask,
  deleteTask,
  updateTaskStatus,
};

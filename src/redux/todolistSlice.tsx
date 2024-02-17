import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todolistAPI } from '../api/todolistapi';
import {
  InitialSate,
  TaskType,
  UpdateTaskStatusArg,
} from '../features/common/types';

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
        if (action.payload) {
          state.todolist = action.payload;
        }
      })
      .addCase(addTask.fulfilled, (state, action) => {
        if (action.payload) {
          state.todolist.push(action.payload);
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const index = state.todolist.findIndex(
          (task) => task.id === action.payload?.id
        );
        if (index !== -1) state.todolist.splice(index, 1);
      })
      .addCase(updateTaskStatus.fulfilled, (state, action) => {
        const index = state.todolist.findIndex(
          (task) => task.id === action.payload?.id
        );
        if (index !== -1 && action.payload) {
          state.todolist[index].isComplete = action.payload?.isComplete;
        }
      });
  },
});

const fetchTasks = createAsyncThunk('todos/getTodos', async () => {
  try {
    const res = await todolistAPI.getTasks();
    const tasks = res.data;
    console.log(tasks);
    return tasks;
  } catch (error) {}
});

const addTask = createAsyncThunk('todos/addTodo', async (arg: TaskType) => {
  try {
    const res = await todolistAPI.addTask(arg);
    const task = res.data;
    return task;
  } catch (error) {}
});

const deleteTask = createAsyncThunk(
  'todos/deleteTask',
  async (taskId: number) => {
    try {
      const res = await todolistAPI.deleteTask(taskId);
      const id = res.data.id;
      console.log(id);

      return { id };
    } catch (error) {}
  }
);

const updateTaskStatus = createAsyncThunk(
  'todos/updateTaskStatus',
  async (arg: UpdateTaskStatusArg) => {
    try {
      const res = await todolistAPI.updateTaskStatus(arg);
      const task = res.data;
      return task;
    } catch (error) {}
  }
);
export const todolistReducer = slice.reducer;
export const todolistActions = slice.actions;
export const tasksThunks = {
  fetchTasks,
  addTask,
  deleteTask,
  updateTaskStatus,
};

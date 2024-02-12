import { configureStore } from '@reduxjs/toolkit';
import { todolist } from './todolistSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    todolist: todolist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

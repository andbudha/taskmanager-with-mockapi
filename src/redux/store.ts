import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { todolistReducer } from './todolistSlice';

export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

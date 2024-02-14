import axios from 'axios';
import { TaskType } from '../redux/todolistSlice';

export const todolistAPI = {
  getTasks: () => {
    return axios.get<TaskType[]>(
      'https://65cc8f82dd519126b83ee44f.mockapi.io/api/1/todos'
    );
  },
  postTask: (arg: TaskType) => {
    return axios.post(
      'https://65cc8f82dd519126b83ee44f.mockapi.io/api/1/todos',
      { ...arg }
    );
  },
  deleteTask: (taskID: number) => {
    return axios.delete(
      `https://65cc8f82dd519126b83ee44f.mockapi.io/api/1/todos/${taskID}`
    );
  },
  updateTaskStatus: (arg: UpdateTaskStatusArg) => {
    return axios.put<TaskType>(
      `https://65cc8f82dd519126b83ee44f.mockapi.io/api/1/todos/${arg.taskID}`,
      { isComplete: arg.value }
    );
  },
};

export type UpdateTaskStatusArg = {
  value: boolean;
  taskID: number;
};

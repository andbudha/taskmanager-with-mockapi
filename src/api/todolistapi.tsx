import axios from 'axios';
import { TaskType, UpdateTaskStatusArg } from '../features/common/types';

export const todolistAPI = {
  getTasks: () => {
    return axios.get<TaskType[]>(
      'https://65cc8f82dd519126b83ee44f.mockapi.io/api/1/todos'
    );
  },
  addTask: (arg: TaskType) => {
    return axios.post<TaskType>(
      'https://65cc8f82dd519126b83ee44f.mockapi.io/api/1/todos',
      { ...arg }
    );
  },
  deleteTask: (taskId: number) => {
    return axios.delete(
      `https://65cc8f82dd519126b83ee44f.mockapi.io/api/1/todos/${taskId}`
    );
  },
  updateTaskStatus: (arg: UpdateTaskStatusArg) => {
    return axios.put<TaskType>(
      `https://65cc8f82dd519126b83ee44f.mockapi.io/api/1/todos/${arg.taskID}`,
      { isComplete: arg.value }
    );
  },
};

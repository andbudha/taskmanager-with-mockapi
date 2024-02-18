import axios from 'axios';
import { TaskType, UpdateTaskStatusArg } from '../features/common/types';

export const todolistAPI = {
  getTasks: () => {
    return axios.get<TaskType[]>('https://8dfcc811d3e9872d.mokky.dev/todos');
  },
  addTask: (arg: TaskType) => {
    return axios.post<TaskType>('https://8dfcc811d3e9872d.mokky.dev/todos', {
      ...arg,
    });
  },
  deleteTask: (taskId: number) => {
    return axios.delete(`https://8dfcc811d3e9872d.mokky.dev/todos/${taskId}`);
  },
  updateTaskStatus: (arg: UpdateTaskStatusArg) => {
    return axios.patch<TaskType>(
      `https://8dfcc811d3e9872d.mokky.dev/todos/${arg.taskID}`,
      { isComplete: arg.value }
    );
  },
};

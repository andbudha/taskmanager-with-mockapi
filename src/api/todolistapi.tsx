import axios from 'axios';
import { TaskType, UpdateTaskStatusArg } from '../features/common/types';

const instance = axios.create({
  baseURL: 'https://8dfcc811d3e9872d.mokky.dev/todos',
});

export const todolistAPI = {
  getTasks: () => {
    return instance.get<TaskType[]>('');
  },
  addTask: (arg: TaskType) => {
    return instance.post<TaskType>('', {
      ...arg,
    });
  },
  deleteTask: (taskId: number) => {
    return instance.delete(`/${taskId}`);
  },
  updateTaskStatus: (arg: UpdateTaskStatusArg) => {
    return instance.patch<TaskType>(`/${arg.taskID}`, {
      isComplete: arg.value,
    });
  },
};

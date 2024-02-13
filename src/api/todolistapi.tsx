import axios from 'axios';
import { TaskType } from '../redux/todolistSlice';

export const todolistAPI = {
  getTasks: () => {
    return axios.get('https://8dfcc811d3e9872d.mokky.dev/todos');
  },
  postTask: (arg: TaskType) => {
    return axios.post('https://8dfcc811d3e9872d.mokky.dev/todos', { ...arg });
  },
};

import axios from 'axios';

export const todolistAPI = {
  getTasks: () => {
    return axios.get('https://8dfcc811d3e9872d.mokky.dev/todos');
  },
};

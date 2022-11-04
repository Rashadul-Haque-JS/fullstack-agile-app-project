import axios from 'axios';

// interface data {
//   name: string;
//   email: string;
//   token: string;
//   password: string;
// }

axios.defaults.baseURL = 'http://localhost:3333';

export const saveHeaderToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const businessLogin = async (email: string, password: string) => {
  return await axios.post('/business/login', { email, password });
};

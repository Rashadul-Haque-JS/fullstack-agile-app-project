import axios from 'axios';


export interface businessData {
  name: string;
  email: string;
  password: string;
}

axios.defaults.baseURL = 'http://localhost:3333';

export const saveHeaderToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeHeaderToken = () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ''`;
};

export const businessLogin = async (email: string, password: string) => {
  return await axios.post('/business/login', { email, password });
};

export const businessLogout = async () => {
  return await axios.get('/business/logout');
};

export const businessCreate = async (data: businessData) => {
  return await axios.post('/business', data);
};

export const businessById = async (businessId:string) => {
  return await axios.get(`/business/${businessId}`);
};

export const userLogin = async (email: string, password: string) => {
  return await axios.post('/users/login', { email, password });
};

export const userLogout = async () => {
  return await axios.get('/users/logout');
};

export const userCreate = async (data: businessData) => {
  return await axios.post('/user', data);
};

export const userById = async (userId:string) => {
  return await axios.get(`/users/${userId}`);
};

export const ticketsByBusinessId = async () => {
  return await axios.get('/tickets/business');
};

export const ticketsByUserId = async () => {
  return await axios.get('/tickets/user');
};

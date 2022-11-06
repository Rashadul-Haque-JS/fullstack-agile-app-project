import axios from 'axios';
import { StringExpressionOperatorReturningArray } from 'mongoose';

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

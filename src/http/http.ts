import axios from 'axios';
import { getocaltion } from '../utils/login';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true, // 跨域类型时是否在请求中协带cookie
});

// http请求拦截器

instance.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});
// http响应拦截器

instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  return Promise.reject(error);
});

export default instance;


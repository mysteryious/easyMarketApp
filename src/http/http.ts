import axios from 'axios';
import { getocaltion } from '../utils/login';


const instance = axios.create({
  baseURL: 'http://169.254.211.106:8888',
  headers: {
    'x-nideshop-token': getocaltion('token') === null ? '' : getocaltion('token'),
  },
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


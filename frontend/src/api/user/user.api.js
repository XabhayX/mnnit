import axios from 'axios';

const userAPI = axios.create({
  baseURL: '/api/users',
  headers: {
    'Content-Type': 'application/json'
  }
});

userAPI.interceptors.request.use((config) => {
    console.log('userAPI send and interception is done')
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (data) => userAPI.post('/register-user', data);
export const getContribution = (data) => userAPI.post('/get-contribution', data);

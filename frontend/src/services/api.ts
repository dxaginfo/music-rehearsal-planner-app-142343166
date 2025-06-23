import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { store } from '../store';
import { clearAuth } from '../store/slices/authSlice';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Add token to requests if available
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Handle response errors globally
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle 401 Unauthorized responses
    if (error.response && error.response.status === 401) {
      // Clear authentication state from Redux store
      store.dispatch(clearAuth());
    }
    return Promise.reject(error);
  }
);

export default api;
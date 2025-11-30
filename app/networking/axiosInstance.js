import axios from 'axios';
import { Constants } from 'app/constants/api';
import { getSecureItem, saveSecureItem } from 'app/hooks';

const axiosInstance = axios.create({
  baseURL: Constants.baseUrl,
  timeout: 100000000,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await getSecureItem('accessToken'); 
    config.headers['Content-Type'] = 'multipart/form-data';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response?.status === 419 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }
      originalRequest._retry = true;
      isRefreshing = true;
      try {
        const currentToken = await getSecureItem('accessToken');

        const formData = new FormData();
        formData.append('refresh_token', currentToken);
        const response = await axios.post(
          `${Constants.baseUrl}/refresh/token`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        if (response.status === 200) {
          const newToken = response.data.token;
          await saveSecureItem('accessToken', newToken);

          axiosInstance.defaults.headers.Authorization = `Bearer ${newToken}`;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          processQueue(null, newToken);
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

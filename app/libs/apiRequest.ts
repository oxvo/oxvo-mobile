import authStore from '@oxvo-mobile/store/authStore';

import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

interface ApiResponse<T> {
  data: T;
}

const apiBaseUrl = 'https://staging-api.oxvo.app';

const apiRequest = async <T>(axiosConfig: AxiosRequestConfig): Promise<T> => {
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  console.log('authStore.getState().token -->', authStore.getState().token);

  // Add request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const { token } = authStore.getState();
      if (token) {
        const newConfig = { ...config };
        newConfig.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders;

        return newConfig;
      }

      return config;
    },
    (error) =>
      // Do something with request error
      Promise.reject(error)
  );

  // Add response interceptor
  axiosInstance.interceptors.response.use(
    (response) =>
      // Do something with response data
      response,
    (error: AxiosError) => {
      // Do something with response error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log('AxiosError', error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
      }
      //   console.log(error.config);
      return Promise.reject(error);
    }
  );

  const response = await axiosInstance.request<ApiResponse<T>>(axiosConfig);

  return response.data.data;
};

export default apiRequest;

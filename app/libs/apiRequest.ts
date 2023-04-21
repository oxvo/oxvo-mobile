// import refreshTokenService from '@oxvo-mobile/domains/Auth/services/refreshToken';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

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

  // Add request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const { accessToken } = useAuthStore.getState();
      if (accessToken) {
        const newConfig = { ...config };
        newConfig.headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
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
    async (error: AxiosError | any) => {
      const { onLogout } = useAuthStore.getState();

      if (error.response?.status === 401) {
        onLogout();
      }
      /** 
        const originalRequest = error.config;
        
        if (error.response?.status === 401 && !originalRequest._retry) {
        
          originalRequest._retry = true;

          try {
            const { refreshToken, setTokens } = useAuthStore.getState();

            if (refreshToken) {
              const response = await refreshTokenService({ refreshToken });

              setTokens(response);

              if (response.accessToken && originalRequest) {
                originalRequest.headers.Authorization = `Bearer ${response.accessToken}`;
              }

              return await axiosInstance(originalRequest);
            }

            return await Promise.reject(error);
          } catch (refreshError) {
            return Promise.reject(error);
          } 
        }
      */

      return Promise.reject(error);
    }
  );

  const response = await axiosInstance.request<ApiResponse<T>>(axiosConfig);

  return response.data.data;
};

export default apiRequest;

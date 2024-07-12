import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { openSnackbar } from '~/api/snackbar';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('serviceToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    ToastError(error);
  }
);

export const ToastError = (error: AxiosError): void => {
  const message = error.response && getErrorMessage(error.response);
  const severity = 'error';

  openSnackbar({
    open: true,
    severity: severity,
    message,
    anchorOrigin: { vertical: 'top', horizontal: 'right' },
    variant: 'alert',
    alert: {
      color: severity
    },
    close: true
  });
};

export const getErrorMessage = (error: AxiosResponse): string => {
  if (error) {
    return error?.data?.message;
  }

  return 'Wrong Services';
};

export default axiosInstance;

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

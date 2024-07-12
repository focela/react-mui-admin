import axios, { AxiosError, AxiosResponse } from 'axios';
import { dispatch } from '~/store';
import { openSnackbar } from '~/store/slices/snackbar';

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

  dispatch(
    openSnackbar({
      open: true,
      severity: 'error',
      message,
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      variant: 'alert',
      alert: {
        color: 'error'
      },
      close: true
    })
  );
};

export const getErrorMessage = (error: AxiosResponse): string => {
  if (error) {
    return error?.data?.message;
  }

  return 'Wrong Services';
};

export default axiosInstance;

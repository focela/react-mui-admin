import axiosInstance from '~/utils/axios';

interface Credentials {
  account: string;
  password: string;
}

export const getUser = () => axiosInstance.get(`/api/private/user`);
export const postLogin = (data: Credentials) => axiosInstance.post('/api/private/login', data);

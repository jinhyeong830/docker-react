import axios from 'axios';
import Cookies from 'js-cookie';
import { RESTApiMethod } from '../constants/enum';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER, // 기본 API 경로
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 전에 토큰 자동 삽입
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export async function needTokenAxios(method: RESTApiMethod, url: string, data?: any) {
  return axiosInstance({
    method,
    url,
    data,
  });
}

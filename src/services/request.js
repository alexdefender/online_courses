import axios from 'axios';
import { API_HOST, API_VERSION, AUTH_HEADER } from '@constants';

const api = axios.create({
  baseURL: `${API_HOST}/${API_VERSION}`,
});

export const setAutorizationHeader = (token) => {
  if (token) {
    api.defaults.headers.common[AUTH_HEADER] = token;
  }
};

const onResponseSuccess = (response) => {
  return Promise.resolve(response);
};

const onResponseError = (error) => {
  return Promise.reject(error);
};

api.interceptors.response.use(onResponseSuccess, onResponseError);

export default api;

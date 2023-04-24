import axios from 'axios';
import { getAuthToken } from '@utils';
import { API_HOST, API_VERSION, AUTH_HEADER } from '@constants/api';

const baseURL = `${API_HOST}/${API_VERSION}`;

const api = axios.create({
  baseURL: baseURL,
});

export const setAutorizationHeader = (token) => {
  if (token) {
    api.defaults.headers.common[AUTH_HEADER] = token;
  }
};

const authToken = getAuthToken();
setAutorizationHeader(authToken);

const onResponseSuccess = (response) => {
  return Promise.resolve(response);
};

const onResponseError = (error) => {
  return Promise.reject(error);
};

api.interceptors.response.use(onResponseSuccess, onResponseError);

export default api;

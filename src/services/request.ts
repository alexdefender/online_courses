import axios from 'axios';
import { getAuthToken } from '@utils';
import { API_HOST, API_VERSION, AUTH_HEADER } from '@constants/api';

const baseURL = `${API_HOST}/${API_VERSION}`;

const api = axios.create({
  baseURL: baseURL,
});

export const setAutorizationHeader = (token: string) => {
  if (token) {
    api.defaults.headers.common[AUTH_HEADER] = token;
  }
};

const authToken = getAuthToken();
setAutorizationHeader(authToken);

export default api;

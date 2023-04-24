export const API_HOST = 'https://api.wisey.app';
export const API_VERSION = 'api/v1';
export const AUTH_HEADER = 'Authorization';

const URLS = {
  COURSES: '/core/preview-courses',
  COURSE: (id) => `/core/preview-courses/${id}`,
};

export default URLS;

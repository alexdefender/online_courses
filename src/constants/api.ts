import { CourseId } from '@models/course';

export const API_HOST = 'https://api.wisey.app';
export const API_VERSION = 'api/v1';
export const AUTH_HEADER = 'Authorization';

export const URLS = {
  COURSES: '/core/preview-courses',
  COURSE: (id: CourseId) => `/core/preview-courses/${id}`,
};

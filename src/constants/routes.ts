import { CourseId } from '@models/course';

const ROUTES = {
  HOME: '/',
  COURSE: (id: CourseId) => `/course/${id}`,
  COURSE_PAGE: '/course/[id]',
};

export default ROUTES;

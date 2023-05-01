import localStore from '@utils/localStore';
import { CourseId } from '@models/course';
import { CourseProgress, CoursesProgress } from '@models/progress';
import { LOCAL_STORAGE_KEYS } from '@constants';

export const getCoursesProgress = () =>
  localStore.getData(LOCAL_STORAGE_KEYS.COURSE_PROGRESS) as CoursesProgress | null;

export const getCourseProgress = (id: CourseId): CourseProgress => {
  const coursesProgress = getCoursesProgress();

  if (!coursesProgress) {
    return {};
  }

  return coursesProgress[id];
};

import localStore from '@utils/localStore';
import { getCoursesProgress } from '@utils/progress';
import { CourseId } from '@models/course';
import { PROGRESS_ACTIONS, CourseProgress, ProgressActions } from '@models/progress';
import { LOCAL_STORAGE_KEYS } from '@constants';

export const setCourseProgress = (courseId: CourseId, values: CourseProgress): ProgressActions => {
  let result = getCoursesProgress();

  if (!result) {
    result = {};
  }

  const oldCourseProgress = result[courseId];
  result[courseId] = oldCourseProgress ? { ...oldCourseProgress, ...values } : { ...values };

  localStore.post(LOCAL_STORAGE_KEYS.COURSE_PROGRESS, result);

  return {
    type: PROGRESS_ACTIONS.SET_COURSES,
    payload: result,
  };
};

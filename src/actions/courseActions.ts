import { Dispatch } from 'redux';
import api from '@services/request';
import { COURSE_ACTIONS, CourseId, CourseActions } from '@models/course';
import { CourseAPI } from '@models/api';
import { URLS } from '@constants/api';

const getCourseStart = (): CourseActions => ({
  type: COURSE_ACTIONS.GET_START,
});

const getCourseSuccess = (data: CourseAPI): CourseActions => ({
  type: COURSE_ACTIONS.GET_SUCCESS,
  payload: data,
});

const getCourseError = (error: string): CourseActions => ({
  type: COURSE_ACTIONS.ERROR,
  payload: error,
});

export const resetCourseError = (): CourseActions => ({
  type: COURSE_ACTIONS.RESET_ERROR,
});

export const resetCourse = (): CourseActions => ({
  type: COURSE_ACTIONS.RESET,
});

export const getCourse = (id: CourseId) => (dispatch: Dispatch<CourseActions>) => {
  dispatch(getCourseStart());

  const url = URLS.COURSE(id);

  return api
    .get(url)
    .then(({ data }) => dispatch(getCourseSuccess(data)))
    .catch(({ message }) => dispatch(getCourseError(message)));
};

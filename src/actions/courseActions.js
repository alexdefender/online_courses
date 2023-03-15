import api from '@services/request';
import { isLoading } from '@utils/store';
import URLS from '@constants/api';

import { COURSE, COURSES } from '.';

const getCourseStart = () => ({
  type: COURSE.GET_START,
});

const getCourseSuccess = (data) => ({
  type: COURSE.GET_SUCCESS,
  data,
});

export const resetCourse = () => ({
  type: COURSE.RESET,
});

export const getCourse = (id) => (dispatch) => {
  dispatch(getCourseStart());

  const url = URLS.COURSE(id);

  return api.get(url).then(({ data }) => dispatch(getCourseSuccess(data)));
};

const getCoursesStart = () => ({
  type: COURSES.GET_START,
});

const getCoursesSuccess = (data) => ({
  type: COURSES.GET_SUCCESS,
  data,
});

export const getCourses = () => (dispatch, getState) => {
  const {
    courses: { list },
  } = getState();

  if (isLoading(list)) {
    return Promise.resolve();
  }

  dispatch(getCoursesStart());

  return api.get(URLS.COURSES).then(({ data }) => dispatch(getCoursesSuccess(data)));
};

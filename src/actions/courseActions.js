import api from '@services/request';
import { isLoading } from '@utils/store';
import localStore from '@utils/localStore';
import URLS from '@constants/api';
import { LOCAL_STORAGE_KEYS } from '@constants';

import { getDataFail } from './layoutActions';
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

  return api
    .get(url)
    .then(({ data }) => dispatch(getCourseSuccess(data)))
    .catch(() => dispatch(getDataFail()));
};

const getCoursesStart = () => ({
  type: COURSES.GET_START,
});

const getCoursesSuccess = (data, pagination) => ({
  type: COURSES.GET_SUCCESS,
  data,
  pagination,
});

export const getCourses = () => (dispatch, getState) => {
  const {
    courses: { list },
    pagination,
  } = getState();

  if (isLoading(list)) {
    return Promise.resolve();
  }

  dispatch(getCoursesStart());

  return api
    .get(URLS.COURSES)
    .then(({ data }) => dispatch(getCoursesSuccess(data, pagination)))
    .catch(() => dispatch(getDataFail()));
};

export const getCoursesProgress = () => localStore.get(LOCAL_STORAGE_KEYS.COURSE_PROGRESS);

export const getCourseProgress = (id) => {
  const coursesProgress = getCoursesProgress();

  if (!coursesProgress) {
    return null;
  }

  const { data } = coursesProgress;

  return data[id];
};

export const setCourseProgress = (courseId, values = {}) => {
  let data = {};
  const oldCoursesProgress = getCoursesProgress();

  if (oldCoursesProgress) {
    data = oldCoursesProgress.data;
  }

  data.hasData = true;
  const oldCourseProgress = data[courseId] || {};
  data[courseId] = { ...oldCourseProgress, ...values };

  localStore.post(LOCAL_STORAGE_KEYS.COURSE_PROGRESS, data);
  return {
    type: COURSE.SET_PROGRESS,
    data,
  };
};

import { Dispatch } from 'redux';
import api from '@services/request';
import { RootState } from '@reducers';
import { COURSES_ACTIONS, CoursesActions } from '@models/courses';
import { CoursesAPI } from '@models/api';
import { URLS } from '@constants/api';

const getCoursesStart = (): CoursesActions => ({
  type: COURSES_ACTIONS.GET_START,
});

const getCoursesSuccess = (data: CoursesAPI): CoursesActions => ({
  type: COURSES_ACTIONS.GET_SUCCESS,
  payload: data,
});

const getCoursesError = (error: string): CoursesActions => ({
  type: COURSES_ACTIONS.ERROR,
  payload: error,
});

export const resetCoursesError = (): CoursesActions => ({
  type: COURSES_ACTIONS.RESET_ERROR,
});

export const getCourses = () => (dispatch: Dispatch<CoursesActions>, getState: () => RootState) => {
  const {
    courses: { loading },
  } = getState();

  if (loading) {
    return Promise.resolve();
  }

  dispatch(getCoursesStart());

  return api
    .get(URLS.COURSES)
    .then(({ data }) => dispatch(getCoursesSuccess(data.courses)))
    .catch(({ message }) => dispatch(getCoursesError(message)));
};

export const setPage = (page: number): CoursesActions => ({
  type: COURSES_ACTIONS.SET_PAGE,
  payload: page,
});

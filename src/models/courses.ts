import { CoursesAPI } from './api';
import { Course } from './course';

export enum COURSES_ACTIONS {
  GET_START = 'COURSES.GET_START',
  GET_SUCCESS = 'COURSES.GET_SUCCESS',
  ERROR = 'COURSES.ERROR',
  RESET_ERROR = 'COURSES.RESET_ERROR',
  SET_PAGE = 'PAGINATION.SET_PAGE',
}

export type CoursesList = Array<Array<Course>>;

export type CoursesState = {
  list: CoursesList | null;
  loading: boolean;
  error: string | null;
  page: number;
  perPage: number;
};

type CoursesStartAction = {
  type: COURSES_ACTIONS.GET_START;
};

type CoursesSuccessAction = {
  type: COURSES_ACTIONS.GET_SUCCESS;
  payload: CoursesAPI;
};

type CoursesErrorAction = {
  type: COURSES_ACTIONS.ERROR;
  payload: string;
};

type CoursesResetErrorAction = {
  type: COURSES_ACTIONS.RESET_ERROR;
};

type SetPageAction = {
  type: COURSES_ACTIONS.SET_PAGE;
  payload: number;
};

export type CoursesActions =
  | CoursesStartAction
  | CoursesSuccessAction
  | CoursesErrorAction
  | CoursesResetErrorAction
  | SetPageAction;

import { HYDRATE } from 'next-redux-wrapper';
import { CourseAPI } from './api';

export enum COURSE_ACTIONS {
  GET_START = 'COURSE.GET_START',
  GET_SUCCESS = 'COURSE.GET_SUCCESS',
  ERROR = 'COURSE.ERROR',
  RESET_ERROR = 'COURSE.RESET_ERROR',
  SET_PROGRESS = 'COURSE.SET_PROGRESS',
  RESET = 'COURSE.RESET',
}

export type CourseId = string;

export type LessonId = string;

export type Lesson = {
  id: LessonId;
  title: string;
  isLocked: boolean;
  imageLink: string | null;
  videoLink: string;
};

export type Lessons = Lesson[] | null;

export type Course = {
  id: CourseId;
  title: string;
  description: string;
  imageLink: string | null;
  lessonsCount: number;
  lessons: Lessons;
  rating: number;
  skills: string[];
  videoLink: string | null;
};

export type CourseState = {
  data: Course | null;
  loading: boolean;
  error: string | null;
};

type CourseStartAction = {
  type: COURSE_ACTIONS.GET_START;
};

type CourseSuccessAction = {
  type: COURSE_ACTIONS.GET_SUCCESS;
  payload: CourseAPI;
};

type CourseErrorAction = {
  type: COURSE_ACTIONS.ERROR;
  payload: string;
};

type CourseResetErrorAction = {
  type: COURSE_ACTIONS.RESET_ERROR;
};

type CourseResetAction = {
  type: COURSE_ACTIONS.RESET;
};

type CourseHydrateAction = {
  type: typeof HYDRATE;
  payload: { course: CourseState };
};

export type CourseActions =
  | CourseStartAction
  | CourseSuccessAction
  | CourseErrorAction
  | CourseResetErrorAction
  | CourseResetAction
  | CourseHydrateAction;

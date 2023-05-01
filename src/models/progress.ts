import { LessonId } from './course';

export enum PROGRESS_ACTIONS {
  SET_COURSES = 'PROGRESS.SET_COURSES',
}

export type CourseProgress = {
  lessonId?: LessonId | null;
  lessonStartPosition?: number;
  videoStartPosition?: number;
};

export type CoursesProgress = {
  [key: string]: CourseProgress;
};

export type ProgressState = {
  courses: CoursesProgress;
};

type SetCoursesProgressAction = {
  type: PROGRESS_ACTIONS.SET_COURSES;
  payload: CoursesProgress;
};

export type ProgressActions = SetCoursesProgressAction;

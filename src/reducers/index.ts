import { combineReducers } from 'redux';

import courses from './coursesReducer';
import course from './courseReducer';
import progress from './progressReducer';

export const rootReducer = combineReducers({
  courses,
  course,
  progress,
});

export type RootState = ReturnType<typeof rootReducer>;

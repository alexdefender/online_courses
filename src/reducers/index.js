import { combineReducers } from 'redux';

import courses from './coursesReducer';
import course from './courseReducer';

export default combineReducers({
  courses,
  course,
});

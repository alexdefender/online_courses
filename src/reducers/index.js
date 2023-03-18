import { combineReducers } from 'redux';

import courses from './coursesReducer';
import course from './courseReducer';
import pagination from './paginationReducer';
import layout from './layoutReducer';

export default combineReducers({
  courses,
  course,
  pagination,
  layout,
});

import { combineReducers } from 'redux';

import courses from './coursesReducer';
import course from './courseReducer';
import pagination from './paginationReducer';

export default combineReducers({
  courses,
  course,
  pagination,
});

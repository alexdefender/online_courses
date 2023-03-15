import { COURSES } from '@actions';
import { getLoadingState, getReadyState } from '@utils/store';
import { performCoursesList } from '@utils/api/course';

const initialState = {
  list: {},
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSES.GET_START:
      return {
        ...state,
        list: getLoadingState(state.list),
      };

    case COURSES.GET_SUCCESS:
      return {
        ...state,
        list: getReadyState(performCoursesList(action.data)),
      };

    default:
      return state;
  }
};

export default coursesReducer;

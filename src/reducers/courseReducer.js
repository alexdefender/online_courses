import { COURSE } from '@actions';
import { getLoadingState } from '@utils/store';
import { performCourse } from '@utils/api/course';

const initialState = {
  data: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSE.GET_START:
      return {
        ...state,
        data: getLoadingState(state.data),
      };

    case COURSE.GET_SUCCESS:
      return {
        ...state,
        data: performCourse(action.data),
      };

    case COURSE.RESET:
      return {
        ...state,
        data: initialState.data,
      };

    default:
      return state;
  }
};

export default courseReducer;
